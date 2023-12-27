echo 'URL:'
echo -n http://influxdb-ppe:9999 | base64 -w 0
echo '\nPASSWORD:'
echo -n password | base64 -w 0
echo '\nUSERNAME:'
echo -n user | base64 -w 0
echo '\nORG:'
echo -n ppe | base64 -w 0
echo '\nBUCKET:'
echo -n metrics | base64 -w 0