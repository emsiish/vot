# Уеб апликация за to-do list, която използва AWS. 

За създаването на тази уеб апликация се използват няколко AWS услуги:
- AWS Amplifier за hosting на самата апликация
- AWS Gateway, за да се създаде API и методите GET и POST
- AWS Lambda, за да се имплементира част от логиката, която се свързва с API-то

  За апликацията се използват 2 ламбда функции, написани на python: 
  getTasks се използва за взимане на задачите от базата данни, а addTask - за добавяне на задача
  
- DynamoDB, за да се създаде база данни, в която да се пази информацията.


Това е линкът към апликацията: https://dev.d3yjew80hw2cv.amplifyapp.com/

Така изглежда апликацията:
![image](https://github.com/emsiish/vot/assets/61331069/67fb3414-72d6-42e9-840a-0bb413f8a8e6)

Когато се добави нова задача, на екрана излиза alert:
![image](https://github.com/emsiish/vot/assets/61331069/85eba1b4-074e-49cd-b03b-a597f608b1a9)

И когато човек реши, че иска да види всичките си задачи сортирани, може да натисне бутона "Show All":
![image](https://github.com/emsiish/vot/assets/61331069/09181541-3dd9-4952-a4bf-63dbb940d256)

