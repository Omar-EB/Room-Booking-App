@echo off
start java -jar .\Server\server.jar
start http-server -p 4200 .\Client
