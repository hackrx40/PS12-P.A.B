import json


def transformData(data):
    keys = ["Id","ASIN","title","group","salesrank","similar","categories","reviews","no_sim","revdicts"]
    res={}
    for key,value in data.items():
        if key in keys:
            if key=="reviews":
                res['reviews']=json.loads(data[key][0])
            elif key=="revdicts":
                res["revdicts"]=json.loads(data[key][0])
            elif type(data[key])==list:
                if len(data[key])==1:
                    res[key]=data[key][0]
                elif len(data[key])==0:
                    res[key]=[]
            else:
                res[key]=data[key]
    return res

