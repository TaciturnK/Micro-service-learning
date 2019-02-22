cd /d %~dp0

set nowPath=%cd%
set jarPath=%nowPath%\jarPath

::�ر���ʾ
@echo off    
@echo ��ǰĿ¼Ϊ:%cd%

@echo build microservice-discovery-eureka...
cd microservice-discovery-eureka
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-discovery-eureka*.jar %jarPath%

@echo ��ǰĿ¼Ϊ:%cd%

cd %nowPath%

@echo build microservice-provider-user...
cd microservice-provider-user
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-provider-user*.jar %jarPath%
@echo ��ǰĿ¼Ϊ:%cd%

cd %nowPath%
@echo build microservice-consume...
cd microservice-consume/microservice-consume-movie
call mvn clean package -Dmaven.test.skip=true
cd target
copy microservice-consume-movie*.jar %jarPath%
cd %nowPath%

cd %jarPath%

start java -jar microservice-discovery-eureka.jar
start java -jar microservice-provider-user.jar
start java -jar microservice-consume-movie.jar

:: ��ͣ����ֹ�����˳�
pause   