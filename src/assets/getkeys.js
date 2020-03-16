function stationwiseDashboard() {
    var data;
    var params = {
        "username": "user@thingsboard.org", "password": "user"
    }
    var url = "localhost/api/auth/login"
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(params));

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        var str = response.token;
        var date1 = new Date(),
            date2 = date1.getTime(),
            date3 = date2 - 1000000000000;
        var url = 'localhost/api/plugins/telemetry/DEVICE/';
        var urlid = url.concat("DeviceId");
        var urltemp2 = urlid.concat("/values/timeseries?keys=");
        var urltemp3 = urltemp2.concat("New Efficiency  PUMP 1,New Flow rate Pump 1,Total Flow,Total Head of Pump1,New Power of Pump 1,Suction Pressure of Pump1,CH1,CH2");
        var urltemp4 = urltemp3.concat("&startTs=");
        var urlst = urltemp4.concat(date3);
        var url2 = urlst.concat("&endTs=");
        var urlend = url2.concat(date2);
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', urlend);
        var jwt = "Bearer " + str;
        //xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr2.setRequestHeader("X-Authorization", jwt);
        xhr2.send();
        xhr2.onreadystatechange = (e) => {
            var myCmd = xhr2.responseText;
            data = JSON.parse(myCmd);
            //here
            document.getElementById("flowConsumption").innerHTML = data["Total Flow"][0]["value"];
            document.getElementById("powerConsumption").innerHTML = data["New Power of Pump 1"][0]["value"];
            document.getElementById("efficiency").value = data["New Efficiency  PUMP 1"][0]["value"];
            document.getElementById("co2Emission").value = data["CH1"][0]["value"];
            document.getElementById("power").value = data["New Power of Pump 1"][0]["value"];
            document.getElementById("rupees").value = data["CH2"][0]["value"];
        }
    }
    setTimeout(getGWT, 10000);
}

function userwiseDashboard() {
    var data;
    var params = {
        "username": "user@thingsboard.org", "password": "user"
    }
    var url = "localhost/api/auth/login"
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(params));

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        var str = response.token;
        var date1 = new Date(),
            date2 = date1.getTime(),
            date3 = date2 - 1000000000000;
        var url = 'localhost/api/plugins/telemetry/DEVICE/';
        var urlid = url.concat("DeviceId");
        var urltemp2 = urlid.concat("/values/timeseries?keys=");
        var urltemp3 = urltemp2.concat("New Power of Pump 1,CH1,CH2");
        var urltemp4 = urltemp3.concat("&startTs=");
        var urlst = urltemp4.concat(date3);
        var url2 = urlst.concat("&endTs=");
        var urlend = url2.concat(date2);
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', urlend);
        var jwt = "Bearer " + str;
        //xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr2.setRequestHeader("X-Authorization", jwt);
        xhr2.send();
        xhr2.onreadystatechange = (e) => {
            var myCmd = xhr2.responseText;
            data = JSON.parse(myCmd);
            //here
            document.getElementById("co2Emission").value = data["CH1"][0]["value"];
            document.getElementById("power").value = data["New Power of Pump 1"][0]["value"];
            document.getElementById("rupees").value = data["CH2"][0]["value"];
        }
    }
    setTimeout(getGWT, 10000);
}

var customerDevices = {};
function valueget() {
    var params = {
        "username": "user@thingsboard.org", "password": "user"
    }
    var url = "localhost/api/auth/login";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(params));
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        var str = response.token;
        var entitytype1 = document.getElementById("entityType").value;
        var entityid1 = document.getElementById("entityId").value;
        entityid1 = customerDevices[entityid1];
        var urlend1 = 'localhost/api/plugins/telemetry/' + entitytype1 + '/' + entityid1 + '/keys/timeseries';
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', urlend1);
        var jwt = " Bearer " + str;
        xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr2.setRequestHeader("X-Authorization", jwt);
        xhr2.send();
        xhr2.onload = (e) => {
            var keydata = xhr2.responseText;
            keydata1 = keydata.split(",");

            var x = document.getElementById("sel");
            var y = document.getElementById("keys");
            if (y) {
                document.getElementById("keyselect").remove();
            }

            var newElement = '<p id = "keyselect">Select the keys: <select size="5" style="height: 200px;" id = "keys" multiple></select></p>';
            x.insertAdjacentHTML('afterbegin', newElement);
            x = document.getElementById("keys");
            for (let i = 0; i < keydata1.length; i++) {
                var option = document.createElement("option");
                var temp = keydata1[i].split('"');
                option.text = temp[1];
                x.add(option);
            }
        }
    }

}

function getGWT() {
    var params = {
        "username": "user@thingsboard.org", "password": "user"
    }
    var url = "localhost/api/auth/login"
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(params));

    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        var str = response.token;
        var limit = document.getElementById("lim").value;
        var date1 = document.getElementById("st").value,
            date2 = document.getElementById("end").value;
        var select = document.getElementById('keys'),
            options = select.getElementsByTagName('option'),
            values = [];
        var keylist;

        for (var i = options.length; i--;) {
            if (options[i].selected) {
                console.log(options[i].value);
                if (options[i].value == "New Efficiency PUMP 1") {
                    values.push("New Efficiency  PUMP 1");
                }
                else
                    values.push(options[i].value);
            }
        }
        console.log(values);
        keylist = "";
        keyno = values.length;
        for (var i = 0; i < values.length; i++) {
            keylist = keylist + values[i] + ",";
        }

        keylist = keylist.slice(0, (keylist.length - 1));

        var entitytype1 = document.getElementById("entityType").value;
        var entityid1 = document.getElementById("entityId").value;
        entityid1 = customerDevices[entityid1];
        var datetime1 = Date.parse(date1);
        var datetime2 = Date.parse(date2);
        var urlend = 'localhost/api/plugins/telemetry/' + entitytype1 + '/' + entityid1 + '/values/timeseries?keys=' + keylist + '&startTs=' + datetime1 + '&endTs=' + datetime2 + '&limit=' + limit;


        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', urlend);
        var jwt = " Bearer " + str;
        xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr2.setRequestHeader("X-Authorization", jwt);

        xhr2.onprogress = function (e) {
            if (e.lengthComputable) {
                progressBar.max = e.total;
                document.getElementById("demo").innerHTML = e.loaded;
            }
        };

        xhr2.send();
        xhr2.onload = (e) => {
            var myCmd = xhr2.responseText;
            var d = myCmd.split(']');


            var temp = [];
            var max1 = 0;

            for (let i = 0; i < d.length; i++) {
                var j = d[i].split('"');

                var l = j.length;
                if (max1 < l) {
                    max1 = l;
                }

                temp.push(j);
            }


            var temp1 = ['Date', 'Time'];
            var flag = 1;
            var csv = [];


            for (let i = 1; i < (max1 - 1); i += 3) {
                for (let j = 0; j < (temp.length - 1); j++) {
                    var substring = ":";

                    if (temp[j][i].indexOf(substring) !== -1) {
                        var l = temp[j][i];
                        var d = new Date(Number(l.slice(1, -1))),
                            yyyy = d.getFullYear(),
                            mm = ('0' + (d.getMonth() + 1)).slice(-2),
                            dd = ('0' + d.getDate()).slice(-2),
                            hh = d.getHours(),
                            h = hh,
                            min = ('0' + d.getMinutes()).slice(-2),
                            time;
                        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ';
                        temp1.push(time);
                        flag = 0;

                        break;

                    }

                    else {
                        temp1.push(temp[j][i]);
                        flag = 1;
                    }
                }

                if (flag === 1) {
                    csv.push(temp1);
                    temp1 = [];
                }
            }
            let csvContent = "data:text/csv;charset=utf-8,"
                + csv.map(e => e.join(",")).join("\n");

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "my_data.csv");
            document.body.appendChild(link); // Required for FF

            link.click();
        }
    }
}
function getDevices() {
    var params = {
        "username": "user@thingsboard.org", "password": "user"
    }
    var url = "localhost/api/auth/login"
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(params));
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        var str = response.token;
        var urlend = 'localhost/api/customer/8c95e7f0-c554-11e9-994a-0f385d8f0530/devices?limit=10';
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', urlend);
        var jwt = "Bearer " + str;
        xhr2.setRequestHeader("X-Authorization", jwt);
        xhr2.send();
        xhr2.onreadystatechange = (e) => {
            myCmd = xhr2.responseText;
            myCmd = JSON.parse(myCmd);
            var x = document.getElementById("devices");
            var y = document.getElementById('dcheck');
            if (!y) {
                for (i = 0; i < myCmd["data"].length; i++) {
                    var newElement = '<option id="dcheck" value="' + myCmd["data"][i]["name"] + '">';
                    customerDevices[myCmd["data"][i]["name"]] = myCmd["data"][i]["id"]["id"];
                    x.insertAdjacentHTML('afterbegin', newElement);
                }
            }
        }
    }
}

