title task03
TASKKILL /F /FI "WINDOWTITLE eq task03"

:: ǿ�ƽ��������е�java.exe���κ���java.exe�������������̡�
taskkill /f /im "java.exe" /t

cd /d %~dp0

set nowPath=%cd%
set jarPath=%nowPath%\jarPath

::�ر���ʾ
@echo off    
@echo ��ǰĿ¼Ϊ:%cd%



:: ��ͣ����ֹ�����˳�
pause   