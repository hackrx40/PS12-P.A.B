import pandas as pd
from sklearn.neighbors import NearestNeighbors
import networkx as nx
import joblib


X_GraphSAGE=pd.read_csv("./ModelData/X_GraphSAGE.csv").set_index("Id")
nodes=pd.read_csv("./ModelData/nodes.csv")
nodes = nodes.set_index("Id")

NN_MODEL=joblib.load("./ModelData/nearestNeibhourModel.pkl")



def productRecommendations(productId):
    productDF=X_GraphSAGE.loc[[productId]]
    recommendations=NN_MODEL.kneighbors(productDF,n_neighbors=5,return_distance=False)
    result=[]
    for recommended in recommendations:
        ans=nodes.loc[recommended]
        result.append(ans)
    return result[0]
