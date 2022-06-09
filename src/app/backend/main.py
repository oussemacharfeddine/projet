from typing import Optional

from fastapi import FastAPI,Request

import mysql.connector 

from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class signup(BaseModel):
    username: str
    password: str
    email: str



class send(BaseModel):
    name: str
    price: int 
    desc: str
    img: str

class Login(BaseModel):
    name: str
    pwd: str
    mail: str    

class modifier(BaseModel):
    newname: str
    newprice:str
    newdesc:str
    

   



app = FastAPI()
origins = [
    
    
    
    "http://localhost:4200"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/article")
async def getS():
   mydb = mysql.connector.connect(host ='localhost', user='root', password="10021959", database='mydb')
   mycursor=mydb.cursor()
   rv=mycursor.execute("SELECT * FROM article")
   row_headers=[x[0] for x in mycursor.description]
   rv = mycursor.fetchall()
   json_data=[]
   for result in rv:
       json_data.append(dict(zip(row_headers,result)))

   return json_data










@app.post("/signup")  
  
async def add(signup: signup):
    mydb = mysql.connector.connect(host ='localhost', user='root', password="10021959", database='mydb')
    mycursor=mydb.cursor()
    sql=   ("INSERT INTO compte (name, email, password) " "VALUES (%s, %s, %s)")
    try:
       
       
       mycursor.execute(sql, (signup.username,signup.email,signup.password)) 
       mydb.commit()  
       return {"ok"} 
    except:
       mydb.rollback()    
       return {"non"}     

@app.post("/send")  
  
async def send(send: send):
    db = mysql.connector.connect(host ='localhost', user='root', password="10021959", database='mydb')
    mycursor= db.cursor()
    rv=("INSERT INTO article (Articlename, Description , Articleprix ,imageArticle) " "VALUES (%s, %s, %s, %s)") 
    try:  

       mycursor.execute(rv, (send.name , send.desc , send.price, send.img)) 
       db.commit()  
       return {"ok"} 
    except:
       db.rollback()    
       return {"non"}     



@app.post("/login")
async def login(log:Login ):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "10021959" , database = "mydb")
    cursor = db.cursor()
    cursor.execute("select * from compte where email = '{log.mail}' and password = '{log.pwd}'")
    rv = cursor.fetchall()
    
    if(cursor.rowcount == 1) :
      return {"login" : True }
    else:
      return{"login" : False }

@app.post("/modifier")
async def send(modifier: modifier):
    db = mysql.connector.connect(host ='localhost', user='root', password="10021959", database='mydb')
    mycursor= db.cursor()
    rv=("UPDATE article SET Articlename , Description , Articleprix  WHERE idArticle = 3 " ) 

    try:  

       mycursor.execute(rv ,(modifier.newname ,modifier.newdesc,modifier.price) ) 
       db.commit()  
       return {"ok"} 
    except:
       db.rollback()    
       return {"non"} 


@app.delete("/supprimer")
async def send(modifier: modifier):
    db = mysql.connector.connect(host ='localhost', user='root', password="10021959", database='mydb')
    mycursor= db.cursor()
    rv=("DELETE FROM article WHERE idArticle = 16 ") 
    try:  

       mycursor.execute(rv ) 
       db.commit()  
       return {"ok"} 
    except:
       db.rollback()    
       return {"non"}   


@app.post("/contact")  
  
async def add(signup: signup):
    mydb = mysql.connector.connect(host ='localhost', user='root', password="10021959", database='mydb')
    mycursor=mydb.cursor()
    sql=   ("INSERT INTO compte (name, email, password) " "VALUES (%s, %s, %s)")
    try:
       
       
       mycursor.execute(sql, (signup.username,signup.email,signup.password)) 
       mydb.commit()  
       return {"ok"} 
    except:
       mydb.rollback()    
       return {"non"}   

    

                                                                                                                                                                                   
    
    
     
