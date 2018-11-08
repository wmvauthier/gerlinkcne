// ----- ANOTAÇÕES -----
//$("#showHome").delay(500).animate({"opacity": "1"}, 500); e opacity:0 no CSS

// ----- FUNÇÕES QUE CRIAM DOCUMENTOS HTML -----

function createTicket(id, title, description) {
    var div = document.createElement('div');
    var cp1 = "\#collapseOne";
    var cp2 = "\#collapseTwo";
    var cp3 = "\#collapseThree";
    title = delimiteLength(title, 2);
    div.id = id;
    div.className = 'col-xs-12 col-sm-12 col-md-6 col-lg-4';
    div.innerHTML = '' +
            '<div class = "panel panel-default demo-chart mdl-shadow--2dp mdl-color-white">' +
            '<div class = "panel-heading panel-heading-danger-fd panelTicketBtnArea"><b class="panel-title-fd">' + title + '</b>' +
            '<div class="btn-group pull-right panelTicketBtn">' +
            '<button onclick= "sendServletReturnCall(this); openCollapsePanels(\''+cp2+'\');" id="'+id+'" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvGre">check_circle</i>' +
            '</button>' +
            '<button onclick= "sendServletReturnCall(this); openCollapsePanels('+cp2+');" id="'+id+'" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvYel">info</i>' +
            '</button>' +
            '< button onclick = "sendServletReturnCall(this); openCollapsePanels('+cp3+');" id="'+id+'" class = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvRed">cancel</i>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '</div>';
    document.getElementById("pendingCalls").appendChild(div);
}

function createCategory(id, qtd, description) {
    var div = document.createElement('div');
    div.className = 'col-xs-6 col-sm-4 col-md-3 col-lg-2 container mdl-grid demo-content';
    div.innerHTML = '' +
            '<div class="col mdl-shadow--2dp randomColor">' +
            '<div class="row">' +
            '<div class="col col-sm-6 panelTicketBtnInverter">' +
            '<a><i id="catEdit' + id + '" class="material-icons">create</i></a>' +
            '</div>' +
            '<div class="col col-sm-6 panelTicketBtnInverter">' +
            '<a><i id="catDelete' + id + '" class="material-icons">clear</i></a>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col col-sm-12">' +
            '<h1><b>' + qtd + '</b></h1><br>' +
            '<p><b>' + description + '</b></p><br>' +
            '</div>' +
            '</div>' +
            '</div>';
    document.getElementById("categories").appendChild(div);
    var collection = $(".randomColor");
    collection.each(function () {
        colorCategory(this);
    });
}

function createNavCategory(id, qtd, description) {
    var div = document.createElement('div');
    div.innerHTML = '' +
            '<a id="nav' + id + '" class="mdl-navigation__link" href="">' +
            '<i class="material-icons" role="presentation">' +
            'supervised_user_circle' +
            '</i>' + description + '</a>';
    document.getElementById("navCategories").appendChild(div);
}

function createCategoryButton() {
    var div = document.createElement('div');
    div.className = 'col-xs-6 col-sm-4 col-md-3 col-lg-2 container mdl-grid demo-content';
    div.style = 'cursor:pointer; ';
    div.innerHTML = '' +
            '<div class="col mdl-shadow--2dp">' +
            '<div class="row">' +
            '<div class="col col-sm-12">' +
            '<h1><b><i class="material-icons" style="font-size: 72px;">add_circle</i></b></h1><br>' +
            '<p><b>ADICIONAR CATEGORIA</b></p><br>' +
            '</div>' +
            '</div>' +
            '</div>';
    document.getElementById("categoriesBtn").appendChild(div);
}

function createClient() {

    var table = document.getElementById('clientTableBody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    td1.innerHTML = 'DATA';
    td2.innerHTML = 'CLIENTE';
    td3.innerHTML = 'DESCRICAO';
    td4.innerHTML = 'TECNICO';
    td5.innerHTML = '<button class="btn btn-sm btn-warning" onclick="formClientsUp()"><i class="material-icons">create</i></button>&nbsp' +
            '<button class="btn btn-sm btn-danger"><i class="material-icons">delete</i></button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
}

// ----- FUNÇÕES TABELA -----

$(document).ready(function () {
    var activeSystemClass = $('.list-group-item.active');
    //something is entered in search form
    $('#system-search').keyup(function () {
        var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each(function (i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if (inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Resultados: "'
                        + $(that).val()
                        + '"</strong></td></tr>');
            } else
            {
                $('.search-query-sf').remove();
            }

            if (rowText.indexOf(inputText) == -1)
            {
                //hide rows
                tableRowsClass.eq(i).hide();
            } else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if (tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">Nenhum Cliente foi encontrado.</td></tr>');
        }
    });
});
// ----- FUNÇÕES SWITCH -----

$('#navCalls').click(function () {
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "1"}, 500);
    $('#showContent').show();
    $('#titlePage').html('CHAMADOS');
    $('.contentX').attr('id', 'pendingCalls');
    $('#addPanelTitle').html('ADICIONAR');
    $('#changePanelTitle').html('ALTERAR');
    $('#fixPanelTitle').html('RESOLVER');
    $('#reportPanelTitle').html('RELATÓRIO');
    $('#addPanelBody').html(addTicketForm);
    $('#fixPanelBody').html(fixTicketForm);
    $('#reportPanelBody').html(reportTicketForm);
    sendServletRefreshCall();
    openCollapsePanels($('#collapseOne'));
});
$('#navClients').click(function () {
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#formClients').animate({"opacity": "0"}, 500);
    $('#formClients').hide();
    $('#showClients').animate({"opacity": "1"}, 500);
    $('#showClients').show();
    $('#tableClients').animate({"opacity": "1"}, 500);
    $('#tableClients').show();
    $('#titlePage').html('CLIENTES');
});
$('#formClientsBack').click(function () {
    $('#formClients').animate({"opacity": "0"}, 500);
    $('#formClients').hide();
    $('#tableClients').animate({"opacity": "1"}, 500);
    $('#tableClients').show();
});
$('.formClientsUp').click(function () {
    $('#tableClients').animate({"opacity": "0"}, 500);
    $('#tableClients').hide();
    $('#formClients').animate({"opacity": "1"}, 500);
    $('#formClients').show();
});
function formClientsUp() {
    $('#tableClients').animate({"opacity": "0"}, 500);
    $('#tableClients').hide();
    $('#formClients').animate({"opacity": "1"}, 500);
    $('#formClients').show();
}

$('#home').click(function () {
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#showHome').animate({"opacity": "1"}, 500);
    $('#showHome').show();
    $('#titlePage').html('HOME');
});
// ----- CHAMADAS PARA GRÁFICOS -----

function drawSVGCalls(qtdCalls, qtdReadyCalls, dateNow) {

    var realDateNow = new Object();
    equalDat(dateNow, realDateNow);
    var data = google.visualization.arrayToDataTable([
    ['Dia', 'Concluídos', 'Pendentes'],
    [`${minusEqualDat(realDateNow, dateNow, 7, 'day')} / ${minusEqualDat(realDateNow, dateNow, 7, 'month')}`, qtdReadyCalls[7], qtdCalls[7]],
    [`${minusEqualDat(realDateNow, dateNow, 6, 'day')} / ${minusEqualDat(realDateNow, dateNow, 6, 'month')}`, qtdReadyCalls[6], qtdCalls[6]],
    [`${minusEqualDat(realDateNow, dateNow, 5, 'day')} / ${minusEqualDat(realDateNow, dateNow, 5, 'month')}`, qtdReadyCalls[5], qtdCalls[5]],
    [`${minusEqualDat(realDateNow, dateNow, 4, 'day')} / ${minusEqualDat(realDateNow, dateNow, 4, 'month')}`, qtdReadyCalls[4], qtdCalls[4]],
    [`${minusEqualDat(realDateNow, dateNow, 3, 'day')} / ${minusEqualDat(realDateNow, dateNow, 3, 'month')}`, qtdReadyCalls[3], qtdCalls[3]],
    [`${minusEqualDat(realDateNow, dateNow, 2, 'day')} / ${minusEqualDat(realDateNow, dateNow, 2, 'month')}`, qtdReadyCalls[2], qtdCalls[2]],
    [`${minusEqualDat(realDateNow, dateNow, 1, 'day')} / ${minusEqualDat(realDateNow, dateNow, 1, 'month')}`, qtdReadyCalls[1], qtdCalls[1]],
    [`Hoje`, qtdReadyCalls[0], qtdCalls[0]]
    ]);
            var options = {
                title: 'Chamados dos Últimos 7 Dias',
                hAxis: {title: 'Data', titleTextStyle: {color: '#333'}},
                vAxis: {minValue: 0},
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
            };
    var chart = new google.visualization.AreaChart(document.getElementById('graphs'));
    chart.draw(data, options);
}

// ----- CHAMADAS PARA SERVLETS -----

function sendServletAddCall(client, dat, description) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var call = JSON.parse(xhr.responseText);
            createTicket(call.id, call.cliente, call.descricao);
            document.getElementById('addCall-form').reset();
            sendServletRefreshCall();
        }
    };
    xhr.open("post", "registerCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("client=" + client.value + "&date=" + dat.value + "&description=" + description.value + "");
}

function sendServletRefreshCall() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            //VERIFICAÇÃO PARA JSON NULO
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#pendingCalls").html("<p class='fullCenter'>Não existem Tickets Pendentes!</p>");
                $("#graphs").html("<div class='fullCenter'>Não existem Gráficos para estes Tickets!</div>");
                return false;
            }

            $("#pendingCalls").html("");
            var dateNow = myDat(new Date);
            var count = 0;
            //DESENHA OS CHAMADOS ABERTOS
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.status === 'false') {
                    createTicket(call.id, call.cliente, call.descricao);
                    count++;
                }
            }

            //MANTENDO A MESMA DATA ATUAL
            var realDateNow = new Object();
            equalDat(dateNow, realDateNow);
            //DESENHA O  GRÁFICO DE CHAMADOS ABERTOS

            //VETORES QUE RECEBEM OS CHAMADOS
            var valuesSVG = [];
            var valuesSVGReady = [];
            for (var o = 0; o < 21; o++) {

                var countCalls = 0;
                var countReadyCalls = 0;
                for (var s = 0; s < jsonData.calls.length; s++) {
                    var call = jsonData.calls[s];
                    var convertedCall = toMyDat(call.data);
                    if (convertedCall.day === dateNow.day) {
                        if (convertedCall.month === dateNow.month) {
                            if (convertedCall.year === dateNow.year) {
                                if (call.status === 'false') {
                                    countCalls++;
                                }
                                if (call.status !== 'false') {
                                    countReadyCalls++;
                                }
                            }
                        }
                    }
                }

                minusDat(dateNow, 1);
                valuesSVG[o] = countCalls;
                valuesSVGReady[o] = countReadyCalls;
            }

            drawSVGCalls(valuesSVG, valuesSVGReady, realDateNow);
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

//AINDA NÃO CHAMA NADA
function sendServletRefreshCategories() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            document.getElementById("navCategories").innerHTML = '';
            document.getElementById("categories").innerHTML = '';
            //DESENHA AS CATEGORIAS
            for (var i = 0; i < jsonData.categories.length; i++) {
                var category = jsonData.categories[i];
                createCategory(category.id, category.qtd, category.descripion);
                createNavCategory(category.id, category.qtd, category.descripion);
            }

        }
    };
    xhr.open("post", "refreshCategories", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletFindCall() {

    var clientToFind = document.getElementById('findCall-formClient').value;
    var dateToFind = document.getElementById('findCall-formDat').value;
    var results = document.getElementById('findCall-formResult');
    results.innerHTML = '';
    if (clientToFind === '' && dateToFind === '') {
        return false;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.cliente == clientToFind || call.data == dateToFind) {
                    if (call.status == 'false') {
                        createUnReadyFoundCall(call.id, call.cliente, call.data, call.descricao);
                    } else if (call.status == 'true') {
                        createReadyFoundCall(call.id, call.cliente, call.data, call.descricao, call.tecnico);
                    }
                }
            }
            clientToFind = '';
            dateToFind = '';
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletReturnCall(choosenCall) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if (call.id === choosenCall.id) {
                    document.getElementById('fixCall-form').reset();
                    document.getElementById('fixCall-formClient').value = call.cliente;
                    document.getElementById('fixCall-formDat').value = call.data;
                    document.getElementById('fixCall-formDescription').value = call.descricao;
                    document.getElementById('fixCall-formselectedCall').innerHTML = call.id;
                    openCollapsePanels($('#collapseTwo'));
                }
            }
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletFixCall() {

    var callToFind = document.getElementById('fixCall-formselectedCall');
    var description = document.getElementById('fixCall-formDescription').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var element = document.getElementById(callToFind.innerHTML);
            element.parentNode.removeChild(element);
            document.getElementById('fixCall-form').reset();
            closeCollapsePanels($('#collapseTwo'));
            sendServletRefreshCall();
        }
    };
    xhr.open("post", "fixCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + callToFind.innerHTML + "&description=" + description + "");
}

function sendServletReportCall() {

    var xhr = new XMLHttpRequest();
    var client = document.getElementById('reportCall-formClient').value;
    var datIni = document.getElementById('reportCall-formDatIni').value;
    var datFin = document.getElementById('reportCall-formDatFin').value;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            $('#reportCall-formResult').val();
            //Criação da Tabela
            var divTitle = document.createElement('div');
            var title = document.createElement('p');
            title.innerHTML = '<center><b>Relatorio de Chamados do Cliente</b></center>';
            divTitle.appendChild(title);
            var table = document.createElement('table');
            var tr1 = document.createElement('tr');
            var tdData1 = document.createElement('td');
            var tdCliente1 = document.createElement('td');
            var tdTecnico1 = document.createElement('td');
            var tdDescricao1 = document.createElement('td');
            tdData1.innerHTML = '<b>DATA</b>';
            tdCliente1.innerHTML = '<b>CLIENTE</b>';
            tdDescricao1.innerHTML = '<b>DESCRICAO</b>';
            tdTecnico1.innerHTML = '<b>TECNICO</b>';
            tr1.appendChild(tdData1);
            tr1.appendChild(tdCliente1);
            tr1.appendChild(tdTecnico1);
            tr1.appendChild(tdDescricao1);
            table.appendChild(tr1);
            for (var i = 0; i < jsonData.calls.length; i++) {
                var call = jsonData.calls[i];
                if ((call.data >= datIni && call.data <= datFin) || (call.cliente == client)) {
                    var tr = document.createElement('tr');
                    var tdData = document.createElement('td');
                    var tdCliente = document.createElement('td');
                    var tdTecnico = document.createElement('td');
                    var tdDescricao = document.createElement('td');
                    tdData.innerHTML = call.data;
                    tdCliente.innerHTML = call.cliente;
                    tdDescricao.innerHTML = call.descricao;
                    tdTecnico.innerHTML = call.tecnico;
                    tr.appendChild(tdData);
                    tr.appendChild(tdCliente);
                    tr.appendChild(tdTecnico);
                    tr.appendChild(tdDescricao);
                    table.appendChild(tr);
                }
            }

            var formResults = document.getElementById('reportCall-formResult');
            formResults.appendChild(divTitle);
            formResults.appendChild(table);
            if (confirm('Relatório Completo! Deseja salvá-lo em um arquivo?')) {
                sendServletSaveReportCall(table, divTitle);
                document.getElementById('reportCall-formCloseBtn').click();
            } else {
                $("#reportCall-formResult").css("visibility", "visible");
            }

            client = '';
            datIni = '';
            datFin = '';
        }
    };
    xhr.open("post", "refreshCall", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletSaveReportCall(table, divTitle) {

    var hiddenResults = document.getElementById('hiddenResults');
    var formResults = document.getElementById('reportCall-formResult');
    formResults.innerHTML = '';
    hiddenResults.innerHTML = '';
    hiddenResults.appendChild(divTitle);
    hiddenResults.appendChild(table);
    html2canvas(document.getElementById('hiddenResults'), {
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
        }
    });
    hiddenResults.innerHTML = '';
}

// ----- FUNÇÕES AUXILIARES -----

//DATA ATUAL NO MYDAT
function myDat(dateNow) {

    var n = dateNow.getMonth();
    var okMonth = parseInt(n, 10);
    okMonth++;
    var myDat = new Object();
    myDat.year = dateNow.getFullYear();
    myDat.month = okMonth;
    myDat.day = dateNow.getDate();
    return myDat;
}

//CONVERTE PARA MYDAT O QUE VEM DO SERVLET
function toMyDat(dateNow) {
    var times = 0;
    var myDat = new Object();
    var concat = '';
    for (i = 0; i < dateNow.length; i++) {
        if (dateNow[i] === '-') {
            if (times === 0 && concat !== '') {
                var n = parseInt(concat, 10);
                myDat.year = n;
                concat = '';
                times++;
            }
            if (times === 1 && concat !== '') {
                var n = parseInt(concat, 10);
                myDat.month = n;
                concat = '';
                times++;
            }
        } else {
            concat = concat + dateNow[i];
        }
    }
    var n = parseInt(concat, 10);
    myDat.day = n;
    return myDat;
}

//REDUZ UM DIA EM MYDAT
function minusDat(dateNow, times, back) {

    for (var i = 0; i < times; i++) {
//VERIFICA VIRADAS DE MÊS E DE ANO
        if ((dateNow.day === 1) && (dateNow.month === 1)) {
            dateNow.day = 31;
            dateNow.month = 12;
            dateNow.year = dateNow.year - 1;
        }
        if (dateNow.day === 1) {
            dateNow.day = 31;
            dateNow.month = dateNow.month - 1;
        } else {
            dateNow.day = dateNow.day - 1;
        }
    }

    if (back == 'day') {
        return dateNow.day;
    } else if (back == 'month') {
        var a = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        return a[dateNow.month - 1];
    } else if (back == 'year') {
        return dateNow.year;
    } else if (back == null) {
        return dateNow;
    }

    return dateNow;
}

//IGUALA DOIS DIAS EM MYDAT
function equalDat(real, copy) {
    copy.year = real.year;
    copy.month = real.month;
    copy.day = real.day;
}

//IGUALA DOIS DIAS EM MYDAT E REDUZ (PARA SVG'S)
function minusEqualDat(real, copy, times, back) {
    equalDat(real, copy);
    return minusDat(copy, times, back);
}

//COR ALEATÓRIA NA CATEGORIA
function colorCategory(category) {
    var colors = ['#ee3b78', '#34d387', '#94f03c', '#ff703f', '#4c4cd4', '#7f41d1', '#ffee3f', '#ffcf3f'];
    var textColors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#000000', '#000000'];
    var choosed = Math.floor(Math.random() * 7) + 0;
    $(category).css('background-color', colors[choosed]);
    $(category).css('color', textColors[choosed]);
    $(category).css('cursor', 'pointer');
}

//DELIMITA O TAMANHO DAS STRINGS
function delimiteLength(str, num) {
    var newstr = "";
    for (var i = 0; i < num; i++) {
        var c = str.charAt(i);
        newstr += c;
    }
    return newstr;
}

//ABRE O PANEL SELECIONADO, SE JÁ NÃO ESTIVER ABERTO
function openCollapsePanels(button) {
    var check = $(button).hasClass('in');
    if (check === false) {
        if ($(button).attr('id') === 'collapseOne') {
            $('#addPanelTitleBtn').click();
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            $('#fixPanelTitleBtn').click();
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            $('#reportPanelTitleBtn').click();
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            return;
        }
    } else if (check === true) {
        if ($(button).attr('id') === 'collapseOne') {
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseThree'));
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            return;
        }
    }
    return;
}

//FECHA O PANEL SELECIONADO, SE JÁ NÃO ESTIVER FECHADO
function closeCollapsePanels(button) {
    var check = $(button).hasClass('in');
    if (check === false) {
        return;
    } else if (check === true) {
        if ($(button).attr('id') == 'collapseOne') {
            $('#addPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') == 'collapseTwo') {
            $('#fixPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') == 'collapseThree') {
            $('#reportPanelTitleBtn').click();
            return;
        }
        console.log($(button).attr('id'));
    }
    return;
}

//EXECUTA AO INICIAR
function codeAddress() {

    $('#navClients').click();
    createCategoryButton();
    createCategory();
    createNavCategory();
    createClient();
    createClient();
    createClient();
    $("#reportCall-formResult").css("visibility", "hidden");
}

window.onload = codeAddress;
// ----- VARIÁVEIS GLOBAIS -----

var addTicketForm = '<form id="addCall-form" action="JavaScript:sendServletAddCall($(\'#addCall-formClient\')[0],$(\'#addCall-formDat\')[0],$(\'#addCall-formDescription\')[0]);">' +
        '<div class="modal-body">' +
        '<input id="addCall-formClient" name="client" type="text" class="form-control inputClient" placeholder="Nome do Cliente" required>' +
        '<input id="addCall-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado" required />' +
        '<input id="addCall-formTec" name="tec" type="text" class="form-control inputTec" placeholder="Técnico designado" required />' +
        '<input id="addCall-formDescription" name="description" class="form-control inputComment" type="text" placeholder="Descrição da Solicitação" maxlength="250" required>' +
        '</div><div class="modal-footer"><div>' +
        '<button type="submit"  class="btn btn-danger">Adicionar</button>' +
        '</div></div></form>';
var fixTicketForm = '<form id="fixCall-form" action="JavaScript:sendServletFixCall($(\'#fix_Call-formClient\')[0]);">' +
        '<div id="fixCall-formselectedCall" class="hidden"></div>' +
        '<div class="modal-body">' +
        '<input id="fixCall-formClient" name="client" class="form-control inputClient" type="text" placeholder="Nome do Cliente">' +
        '<input id="fixCall-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado"/>' +
        '<textarea id="fixCall-formDescription" name="description" class="form-control inputBigComment" placeholder="Insira aqui os procedimentos realizados" rows="4" cols="50" name="comment" form="usrform"></textarea>' +
        '<br>' +
        '<div id="fixCall-formResult" class="text-center"></div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div>' +
        '<button type="submit" class="btn btn-danger">Resolver</button>' +
        '</div>' +
        '</div>' +
        '</form>';
var reportTicketForm = '<form id="reportCall-form" action="JavaScript:sendServletReportCall();">' +
        '<div id="reportCall-formselectedCall" class="hidden"></div>' +
        '<div class="modal-body">' +
        '<input id="reportCall-formClient" name="client" class="form-control inputClient" type="text" placeholder="Nome do Cliente">' +
        '<input id="reportCall-formDatIni" name="dateini" class="form-control inputCalendar" type="date"/>' +
        '<input id="reportCall-formDatFin" name="datefin" class="form-control inputCalendar2" type="date"/>' +
        '<br>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div>' +
        '<button type="submit"  class="btn btn-danger">Gerar Relatório</button>' +
        '</div>' +
        '</div>' +
        '</form>';
