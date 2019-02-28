title task03

:: ǿ�ƽ��������е�java.exe���κ���java.exe�������������̡�
taskkill /f /im "java.exe" /t

cd /d %~dp0

set nowPath=%cd%
set jarPath=%nowPath%\jarPath

::�ر���ʾ
@echo off    
@echo ��ǰĿ¼Ϊ:%cd%

:: ����ע������
@echo build microservice-discovery-eureka...
cd microservice-discovery-eureka
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-discovery-eureka*.jar %jarPath%
@echo ��ǰĿ¼Ϊ:%cd%

:: �����ṩ��
cd %nowPath%
@echo build microservice-provider-user...
cd microservice-provider-user
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-provider-user*.jar %jarPath%
@echo ��ǰĿ¼Ϊ:%cd%

cd %nowPath%
@echo build microservice-consume-movie-ribbon...
cd microservice-consume/microservice-consume-movie-ribbon
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-consume-movie*.jar %jarPath%
cd %nowPath%

:: ��������
cd %nowPath%
@echo build microservice-getway-zuul...
cd microservice-getway/microservice-getway-zuul
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-getway-zuul*.jar %jarPath%
cd %nowPath%


cd %jarPath%
start java -jar microservice-discovery-eureka.jar
start java -jar microservice-provider-user.jar
start java -jar microservice-provider-user.jar --server.port=9001
start java -jar microservice-consume-movie-ribbon.jar
start java -jar microservice-getway-zuul.jar


c:
cd C:\Users\Taowd\AppData\Local\Google\Chrome\Application
start chrome.exe http://127.0.0.1:8761/


:: ��ͣ����ֹ�����˳�
pause   