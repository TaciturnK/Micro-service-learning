title task03

:: ǿ�ƽ��������е�java.exe���κ���java.exe�������������̡�
taskkill /f /im "java.exe" /t

cd /d %~dp0

set nowPath=%cd%
set jarPath=%nowPath%\jarPath

::�ر���ʾ
@echo off    
@echo ��ǰĿ¼Ϊ:%cd%

:: �����Ŀ
cd %nowPath%
@echo build microservice-hystrix-dashboard...
cd microservice-hystrix-dashboard
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-hystrix-*.jar %jarPath%
cd %nowPath%


cd %jarPath%

start java -jar microservice-discovery-eureka.jar
start java -jar microservice-provider-user.jar
start java -jar microservice-provider-user.jar --server.port=9001
start java -jar microservice-provider-user.jar --server.port=9002
start java -jar microservice-consume-movie-feign-hystrix.jar
start java -jar microservice-hystrix-dashboard.jar


start "C:\Users\Taowd\AppData\Local\Google\Chrome\Application\chrome.exe" http://127.0.0.1:9090/hystrix 


:: ��ͣ����ֹ�����˳�
pause   