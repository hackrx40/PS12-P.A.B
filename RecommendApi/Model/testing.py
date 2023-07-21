import pandas as pd
from sklearn.neighbors import NearestNeighbors
import networkx as nx
import joblib


X_GraphSAGE=pd.read_csv("./ModelData/X_GraphSAGE.csv").set_index("Id")
nodes=pd.read_csv("./ModelData/nodes.csv")
nodes = nodes.set_index("Id")
alinks=pd.read_csv("../Dataset/alinks.csv")

#Creation of the Graph representation of the data
G = nx.from_pandas_edgelist(alinks, source='source', target='target')
missing_nodes = list(set(nodes.index)-set(G.nodes()))
len(missing_nodes)
G.add_nodes_from(missing_nodes)

node_ids = list(G.nodes())
similarity = pd.DataFrame(index=node_ids)
for product in products:
    jaccards = [list(nx.jaccard_coefficient(G,[(product,idx)]))[0][2] for idx in node_ids]
    similarity[f'{product}_jaccards'] = jaccards
print_sim_products(nodes_df=nodes, similarity_df=similarity, max_similars=10)

def print_sim_products(nodes_df, similarity_df, max_similars=10):
    for col in similarity_df.columns:
        prod = int(col.split('_')[0])
        group = str(nodes_df.loc[prod,"Group"])
        title = str(nodes_df.loc[prod,"Title"])
        df = similarity_df[similarity_df[col]>0]
        df = df.sort_values(col,ascending=False)
        similars = df.index
        values = list(df[col].values)
        if len(similars)==0: continue
        print(f"Product {group} '{title}':")
        print(f"Metric {col.split('_')[1]}: ")
        for i,similar in enumerate(similars):
            if i >= max_similars: break
            group = str(nodes_df.loc[similar,"Group"])
            title = str(nodes_df.loc[similar,"Title"])
            print(f"{i+1}. {group} '{title}': {values[i]}")