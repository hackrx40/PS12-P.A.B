from fastapi import FastAPI
import pandas as pd
import json
from gremlin_python.structure.graph import Graph
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
import asyncio
import json
from concurrent.futures import ThreadPoolExecutor

from Functions.dataTransform import dataTransform

graph = Graph()
g = graph.traversal().withRemote(DriverRemoteConnection('ws://localhost:8182/gremlin','g'))
app = FastAPI()


def get_all_products():
    query_result = g.V().hasLabel('Product').valueMap(True).toList()
    return query_result

def fetch_products():
    # Run the Gremlin query in a separate thread using ThreadPoolExecutor
    with ThreadPoolExecutor() as executor:
        products = executor.submit(get_all_products).result()
    return products


@app.get("/")
async def root():
    products = await asyncio.to_thread(fetch_products)
    return {"Products":products}



def get_products_by_group(group):
    # Execute the Gremlin query to fetch products by group
    query_result = g.V().hasLabel('Product').has('group', group).valueMap(True).toList()
    return query_result

@app.get("/products/{group}")
async def get_products(group: str):
    # Start the asynchronous task to fetch products by group
    products = await asyncio.to_thread(get_products_by_group, group)
    return {"Products": products}


def get_products_by_id(item_id):
    # Execute the Gremlin query to fetch products by ID number
    query_result = g.V().hasLabel('Product').has('Id', item_id).valueMap(True).toList()
    return query_result

@app.get("/{productId}")
async def getProductDetails(productId:int):
    product = await asyncio.to_thread(get_products_by_id, productId)
    return {"Product":product}



def get_similar_products(productId):
    # Execute the Gremlin query to fetch products by ID number
    query_result = g.V().hasLabel('Product').has('Id', productId).values("similar").toList()
    return query_result


@app.get("/similar/{productId}")
async def getSimilarProducts(productId:int):
    product = await asyncio.to_thread(get_similar_products, productId)
    data=json.loads(product[0])
    data=[int(value) for value in data]
    return {"Similar Products":data}



