/* #########################################
 #    FUNÇÕES QUE CRIAM ELEMENTOS HTML   #
 ######################################### */

// CRIAR TICKETS
function createTicket(id, title, description) {
    var div = document.createElement('div');
    var cp1 = "\#collapseOne";
    var cp2 = "\#collapseTwo";
    var cp3 = "\#collapseThree";
    var cp4 = "\#collapseFour";
    title = delimiteLength(title, 9);
    div.id = id;
    div.className = 'col-xs-6 col-sm-6 col-md-6 col-lg-3';
    div.innerHTML = '' +
            '<div class = "ticket panel panel-default demo-chart mdl-shadow--2dp mdl-color-white">' +
            '<div class = "panel-heading panel-heading-danger-fd panelTicketBtnArea"><b class="panel-title-fd">' + title + '</b>' +
            '<div class="btn-group pull-right panelTicketBtn">' +
            '<button onclick= "sendServletReturnTicket(this,\'fix\'); openCollapsePanels(\'' + cp2 + '\');" id="' + id + '" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvGre">check_circle</i>' +
            '</button>' +
            '<button onclick= "sendServletReturnTicket(this,\'alter\'); openCollapsePanels(\'' + cp4 + '\');" id="' + id + '" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvYel">info</i>' +
            '</button>' +
            '<button onclick= "sendServletDropTicket(this);" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">' +
            '<i class="material-icons md-light hvRed">cancel</i>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '<div class = "panel-body">' + description + '</div>' +
            '</div>';
    $("#pendingTickets").append(div);
}

// CRIAR CATEGORIAS
function createCategory(id, qtd, description) {
    var div = document.createElement('div');
    div.id = id;
    div.className = 'col-xs-6 col-sm-4 col-md-3 col-lg-2 container mdl-grid demo-content';
    div.innerHTML = '' +
            '<div class="col mdl-shadow--2dp randomColor">' +
            '<div class="row">' +
            '<div class="col col-sm-6 panelTicketBtnInverter">' +
            '<a id="' + id + '" onclick="sendServletReturnCategory(this); formCategoriesUp(); $(\'#catAreaForm\').attr(\'action\', \'JavaScript:sendServletAlterCategory();\'); localStorage.setItem(\'selectedCategory\', this.id); "><i class="material-icons">create</i></a>' +
            '</div>' +
            '<div class="col col-sm-6 panelTicketBtnInverter">' +
            '<a id="' + id + '" onclick="sendServletDropCategory(this);"><i class="material-icons">clear</i></a>' +
            '</div>' +
            '</div>' +
            '<div id="' + id + '" onclick=" localStorage.setItem(\'selectedCategory\', this.id); localStorage.setItem(\'selectedCategoryDescription\',\'' + description + '\'); navTickets();" class="row">' +
            '<div class="col col-sm-12">' +
            '<h1><b>' + qtd + '</b></h1><br>' +
            '<p><b>' + description + '</b></p><br>' +
            '</div>' +
            '</div>' +
            '</div>';
    $("#categories").append(div);
    var collection = $(".randomColor");
    collection.each(function () {
        colorCategory(this);
    });
}

// CRIAR CATEGORIA NA NAVBAR
function createNavCategory(id, qtd, description) {
    var div = document.createElement('div');
    div.id = id;
    div.className = 'navTickets';
    div.innerHTML = '' +
            '<a id="' + id + '" class="mdl-navigation__link" onclick="localStorage.setItem(\'selectedCategoryDescription\',\'' + description + '\'); localStorage.setItem(\'selectedCategory\', this.id); navTickets();" href="#">' +
            '<i class="material-icons" role="presentation">' +
            'navigate_next' +
            '</i>' + description + '</a>';
    $("#navCategories").append(div);
}

// CRIAR BOTÃO DE ADICIONAR CATEGORIAS
function createCategoryButton() {
    var div = document.createElement('div');
    div.className = 'col-xs-6 col-sm-4 col-md-3 col-lg-2 container mdl-grid demo-content';
    div.style = 'cursor:pointer; ';
    div.innerHTML = '' +
            '<div class="col mdl-shadow--2dp bWhite">' +
            '<div class="row">' +
            '<div class="col col-sm-12">' +
            '<h1><b><i onclick="$(\'#catAreaForm\').trigger(\'reset\'); $(\'#catAreaForm\').attr(\'action\', \'JavaScript:sendServletAddCategory();\');" class="material-icons" style="font-size: 72px;">add_circle</i></b></h1><br>' +
            '<p><b>ADICIONAR CATEGORIA</b></p><br>' +
            '</div>' +
            '</div>' +
            '</div>';
    $("#categoriesBtn").append(div);
}

// CRIAR CLIENTE
function createClient(id, nome, cpf, contato, email) {

    var table = document.getElementById('clientTableBody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    $(tr).attr("id", id);
    $(td1).attr("data-title", "NOME");
    $(td2).attr("data-title", "CPF");
    $(td3).attr("data-title", "CONTATO");
    $(td4).attr("data-title", "EMAIL");
    $(td5).attr("data-title", "AÇÕES");
    td1.innerHTML = nome;
    td2.innerHTML = cpf;
    td3.innerHTML = contato;
    td4.innerHTML = email;
    td5.innerHTML = '<button id="' + id + '" class="btn btn-sm btn-warning" onclick="sendServletReturnClient(this); formClientsUp(); localStorage.setItem(\'selectedClient\', this.id); $(\'#cAreaForm\').attr(\'action\', \'JavaScript:sendServletAlterClient();\');"><i class="material-icons">create</i></button>&nbsp' +
            '<button id="' + id + '" class="btn btn-sm btn-danger" onclick="sendServletDropClient(this);"><i class="material-icons">delete</i></button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
}

// CRIAR EMPREGADO
function createEmployee(id, nome, cpf, attr) {

    var table = document.getElementById('employeeTableBody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    $(tr).attr("id", id);
    $(td1).attr("data-title", "NOME");
    $(td2).attr("data-title", "CPF");
    $(td3).attr("data-title", "ATRIBUIÇÕES");
    $(td4).attr("data-title", "AÇÕES");
    td1.innerHTML = nome;
    td2.innerHTML = cpf;
    td3.innerHTML = attr;
    td4.innerHTML = '<button id="' + id + '" class="btn btn-sm btn-warning" onclick="sendServletReturnEmployee(this); formEmployeesUp(); localStorage.setItem(\'selectedEmployee\', this.id); $(\'#eAreaForm\').attr(\'action\', \'JavaScript:sendServletAlterEmployee();\');"><i class="material-icons">create</i></button>&nbsp' +
            '<button id="' + id + '" class="btn btn-sm btn-danger" onclick="sendServletDropEmployee(this);"><i class="material-icons">delete</i></button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
}

// CRIAR ITEM DE ESTOQUE
function createStock(id, description, quantity, value) {

    var table = document.getElementById('stockTableBody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    $(tr).attr("id", id);
    $(td1).attr("data-title", "DESCRIÇÃO");
    $(td2).attr("data-title", "QUANTIDADE");
    $(td3).attr("data-title", "CUSTO UNITÁRIO");
    $(td4).attr("data-title", "AÇÕES");
    td1.innerHTML = description;
    td2.innerHTML = quantity;
    td3.innerHTML = value;
    td4.innerHTML = '<button id="' + id + '" class="btn btn-sm btn-success" onclick="sendServletReturnStock(this); formPlusStockUp(); localStorage.setItem(\'selectedStock\', this.id); $(\'#sAreaPlusForm\').attr(\'action\', \'JavaScript:sendServletChangeStock();\'); localStorage.setItem(\'selectedStockAction\', \'plus\');"><i class="material-icons">add</i></button>&nbsp' +
            '<button id="' + id + '" class="btn btn-sm btn-danger" onclick="sendServletReturnStock(this); formMinusStockUp(); localStorage.setItem(\'selectedStock\', this.id); $(\'#sAreaMinusForm\').attr(\'action\', \'JavaScript:sendServletChangeStock();\'); localStorage.setItem(\'selectedStockAction\', \'minus\');"><i class="material-icons">remove</i></button>&nbsp' +
            '<button id="' + id + '" class="btn btn-sm btn-warning" onclick="sendServletReturnStock(this); formCrudStockUp(); localStorage.setItem(\'selectedStock\', this.id); $(\'#sAreaCrudForm\').attr(\'action\', \'JavaScript:sendServletAlterStock();\');"><i class="material-icons">create</i></button>&nbsp' +
            '<button id="' + id + '" class="btn btn-sm btn-danger" onclick="sendServletDropStock(this);"><i class="material-icons">delete</i></button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
}

/* #########################################
 #    FUNÇÕES PARA TABELA                #
 ######################################### */

// IMPLEMENTAR BUSCA NA TABELA
$(document).ready(function () {
    var activeSystemClass = $('.list-group-item.active');
    //something is entered in search form
    $('#system-searchCli').keyup(function () {
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
    $('#system-searchStock').keyup(function () {
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
    $('#system-searchTec').keyup(function () {
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
                tableBody.prepend('<tr class="search-query-sf"><td colspan="4"><strong>Resultados: "'
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
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">Nenhum Técnico foi encontrado.</td></tr>');
        }
    });
});

/* #########################################
 #    FUNÇÕES PARA GRÁFICOS              #
 ######################################### */

// DESENHAR GRÁFICOS
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

/* #########################################
 #    FUNÇÕES QUE ALTERNAM ENTRE TELAS   #
 #########################################
 # ESSAS FUNÇÕES ALTERNAM ENTRE AS TELAS #
 #   DO SOFTWARE SEM NECESSARIAMENTE     #
 #   RECARREGAR A PÁGINA DO NAVEGADOR    #
 ######################################### */

$('#home').click(function () {
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $('#showFinancial').animate({"opacity": "0"}, 500);
    $('#showFinancial').hide();
    $('#showStock').animate({"opacity": "0"}, 500);
    $('#showStock').hide();
    $('#formCategories').animate({"opacity": "0"}, 500);
    $('#formCategories').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").removeClass("bkImgFinancial");
    $("#mainContent").removeClass("bkImgStock");
    $("#mainContent").addClass("bkImgCat");
    $('#showHome').animate({"opacity": "1"}, 500);
    $('#showHome').show();
    $('#categories').animate({"opacity": "1"}, 500);
    $('#categories').show();
    $('#categoriesBtn').animate({"opacity": "1"}, 500);
    $('#categoriesBtn').show();
    $('#titlePage').html('HOME');
    sendServletRefreshCategories();
});

function navTickets() {
    $('#titlePage').html(localStorage.getItem('selectedCategoryDescription').toUpperCase());
    sendServletRefreshTickets();
    sendServletRefreshClients();
    sendServletRefreshEmployees();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $('#showFinancial').animate({"opacity": "0"}, 500);
    $('#showFinancial').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").removeClass("bkImgReady");
    $("#mainContent").addClass("bkImgTic");
    $('#showContent').animate({"opacity": "1"}, 500);
    $('#showContent').show();
    $('#addPanelTitle').html('ADICIONAR');
    $('#changePanelTitle').html('ALTERAR');
    $('#fixPanelTitle').html('RESOLVER');
    $('#reportPanelTitle').html('RELATÓRIO');
    $('#addPanelBody').html(addTicketForm);
    $('#fixPanelBody').html(fixTicketForm);
    $('#reportPanelBody').html(reportTicketForm);
    $('#changePanelBody').html(changeTicketForm);
    openCollapsePanels($('#collapseOne'));
}

$('#navClients').click(function () {
    sendServletRefreshClients();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#formClients').animate({"opacity": "0"}, 500);
    $('#formClients').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $('#showFinancial').animate({"opacity": "0"}, 500);
    $('#showFinancial').hide();
    $('#showStock').animate({"opacity": "0"}, 500);
    $('#showStock').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").removeClass("bkImgFinancial");
    $("#mainContent").removeClass("bkImgStock");
    $("#mainContent").addClass("bkImgCli");
    $('#showClients').animate({"opacity": "1"}, 500);
    $('#showClients').show();
    $('#tableClients').animate({"opacity": "1"}, 500);
    $('#tableClients').show();
    $('#titlePage').html('CLIENTES');
});

$('#navFinancial').click(function () {
    sendServletRefreshClients();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();

    $('#showStock').animate({"opacity": "0"}, 500);
    $('#showStock').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgStock");
    $("#mainContent").addClass("bkImgFin");
    $('#showFinancial').animate({"opacity": "1"}, 500);
    $('#showFinancial').show();
    $('#fButtonArea').animate({"opacity": "1"}, 500);
    $('#fButtonArea').show();
    $('#formBudget').animate({"opacity": "0"}, 500);
    $('#formBudget').hide();
    $('#titlePage').html('FINANCEIRO');
});

$('#navStock').click(function () {
    sendServletRefreshStock();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#showEmployees').animate({"opacity": "0"}, 500);
    $('#showEmployees').hide();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#showFinancial').animate({"opacity": "0"}, 500);
    $('#showFinancial').hide();
    $('#formStock').animate({"opacity": "0"}, 500);
    $('#formStock').hide();
    $("#mainContent").removeClass("bkImgTec");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgFin");
    $("#mainContent").addClass("bkImgStock");
    $('#showStock').animate({"opacity": "1"}, 500);
    $('#showStock').show();
    $('#tableStock').animate({"opacity": "1"}, 500);
    $('#tableStock').show();
    $('#titlePage').html('ESTOQUE');
});

$('#navEmployees').click(function () {
    sendServletRefreshEmployees();
    $('#showHome').animate({"opacity": "0"}, 500);
    $('#showHome').hide();
    $('#showContent').animate({"opacity": "0"}, 500);
    $('#showContent').hide();
    $('#showClients').animate({"opacity": "0"}, 500);
    $('#showClients').hide();
    $('#formEmployees').animate({"opacity": "0"}, 500);
    $('#formEmployees').hide();
    $('#showReady').animate({"opacity": "0"}, 500);
    $('#showReady').hide();
    $('#showFinancial').animate({"opacity": "0"}, 500);
    $('#showFinancial').hide();
    $('#showStock').animate({"opacity": "0"}, 500);
    $('#showStock').hide();
    $("#mainContent").removeClass("bkImgCli");
    $("#mainContent").removeClass("bkImgCat");
    $("#mainContent").removeClass("bkImgTic");
    $("#mainContent").removeClass("bkImgFinancial");
    $("#mainContent").removeClass("bkImgStock");
    $("#mainContent").addClass("bkImgTec");
    $('#showEmployees').animate({"opacity": "1"}, 500);
    $('#showEmployees').show();
    $('#tableEmployees').animate({"opacity": "1"}, 500);
    $('#tableEmployees').show();
    $('#titlePage').html('TÉCNICOS');
});

$('#formClientsBack').click(function () {
    sendServletRefreshClients();
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

$('.finBudgetUp').click(function () {
    $('#finButtonArea').animate({"opacity": "0"}, 500);
    $('#finButtonArea').hide();
    $('#formBudget').animate({"opacity": "1"}, 500);
    $('#formBudget').show();
});

$('.finBudgetBack').click(function () {
    $('#formBudget').animate({"opacity": "0"}, 500);
    $('#formBudget').hide();
    $('#finButtonArea').animate({"opacity": "1"}, 500);
    $('#finButtonArea').show();
});

$('#formCrudStockBack').click(function () {
    sendServletRefreshStock();
    $('#formStock').animate({"opacity": "0"}, 500);
    $('#formStock').hide();
    $('#tableStock').animate({"opacity": "1"}, 500);
    $('#tableStock').show();
});

$('.formCrudStockUp').click(function () {
    $('#tableStock').animate({"opacity": "0"}, 500);
    $('#tableStock').hide();
    $('#formPlusStock').animate({"opacity": "0"}, 500);
    $('#formPlusStock').hide();
    $('#formMinusStock').animate({"opacity": "0"}, 500);
    $('#formMinusStock').hide();
    $('#formCrudStock').animate({"opacity": "1"}, 500);
    $('#formCrudStock').show();
    $('#formStock').animate({"opacity": "1"}, 500);
    $('#formStock').show();
});

function formCrudStockUp() {
    $('#tableStock').animate({"opacity": "0"}, 500);
    $('#tableStock').hide();
    $('#formPlusStock').animate({"opacity": "0"}, 500);
    $('#formPlusStock').hide();
    $('#formMinusStock').animate({"opacity": "0"}, 500);
    $('#formMinusStock').hide();
    $('#formCrudStock').animate({"opacity": "1"}, 500);
    $('#formCrudStock').show();
    $('#formStock').animate({"opacity": "1"}, 500);
    $('#formStock').show();
}
;

$('#formPlusStockBack').click(function () {
    sendServletRefreshStock();
    $('#formStock').animate({"opacity": "0"}, 500);
    $('#formStock').hide();
    $('#tableStock').animate({"opacity": "1"}, 500);
    $('#tableStock').show();
});

$('.formPlusStockUp').click(function () {
    $('#tableStock').animate({"opacity": "0"}, 500);
    $('#tableStock').hide();
    $('#formCrudStock').animate({"opacity": "0"}, 500);
    $('#formCrudStock').hide();
    $('#formMinusStock').animate({"opacity": "0"}, 500);
    $('#formMinusStock').hide();
    $('#formPlusStock').animate({"opacity": "1"}, 500);
    $('#formPlusStock').show();
    $('#formStock').animate({"opacity": "1"}, 500);
    $('#formStock').show();
});

function formPlusStockUp() {
    $('#tableStock').animate({"opacity": "0"}, 500);
    $('#tableStock').hide();
    $('#formCrudStock').animate({"opacity": "0"}, 500);
    $('#formCrudStock').hide();
    $('#formMinusStock').animate({"opacity": "0"}, 500);
    $('#formMinusStock').hide();
    $('#formPlusStock').animate({"opacity": "1"}, 500);
    $('#formPlusStock').show();
    $('#formStock').animate({"opacity": "1"}, 500);
    $('#formStock').show();
}
;

$('#formMinusStockBack').click(function () {
    sendServletRefreshStock();
    $('#formStock').animate({"opacity": "0"}, 500);
    $('#formStock').hide();
    $('#tableStock').animate({"opacity": "1"}, 500);
    $('#tableStock').show();
});

$('.formMinusStockUp').click(function () {
    $('#tableStock').animate({"opacity": "0"}, 500);
    $('#tableStock').hide();
    $('#formCrudStock').animate({"opacity": "0"}, 500);
    $('#formCrudStock').hide();
    $('#formPlusStock').animate({"opacity": "0"}, 500);
    $('#formPlusStock').hide();
    $('#formMinusStock').animate({"opacity": "1"}, 500);
    $('#formMinusStock').show();
    $('#formStock').animate({"opacity": "1"}, 500);
    $('#formStock').show();
});

function formMinusStockUp() {
    $('#tableStock').animate({"opacity": "0"}, 500);
    $('#tableStock').hide();
    $('#formCrudStock').animate({"opacity": "0"}, 500);
    $('#formCrudStock').hide();
    $('#formPlusStock').animate({"opacity": "0"}, 500);
    $('#formPlusStock').hide();
    $('#formMinusStock').animate({"opacity": "1"}, 500);
    $('#formMinusStock').show();
    $('#formStock').animate({"opacity": "1"}, 500);
    $('#formStock').show();
}
;

$('#formEmployeesBack').click(function () {
    $('#formEmployees').animate({"opacity": "0"}, 500);
    $('#formEmployees').hide();
    $('#tableEmployees').animate({"opacity": "1"}, 500);
    $('#tableEmployees').show();
});

$('.formEmployeesUp').click(function () {
    $('#tableEmployees').animate({"opacity": "0"}, 500);
    $('#tableEmployees').hide();
    $('#formEmployees').animate({"opacity": "1"}, 500);
    $('#formEmployees').show();
});

function formEmployeesUp() {
    $('#tableEmployees').animate({"opacity": "0"}, 500);
    $('#tableEmployees').hide();
    $('#formEmployees').animate({"opacity": "1"}, 500);
    $('#formEmployees').show();
}

$('#formCategoriesBack').click(function () {
    $('#formCategories').animate({"opacity": "0"}, 500);
    $('#formCategories').hide();
    $('#categories').animate({"opacity": "1"}, 500);
    $('#categories').show();
    $('#categoriesBtn').animate({"opacity": "1"}, 500);
    $('#categoriesBtn').show();
});

function formCategoriesBack() {
    $('#formCategories').animate({"opacity": "0"}, 500);
    $('#formCategories').hide();
    $('#categories').animate({"opacity": "1"}, 500);
    $('#categories').show();
    $('#categoriesBtn').animate({"opacity": "1"}, 500);
    $('#categoriesBtn').show();
}

$('.formCategoriesUp').click(function () {
    $('#categories').animate({"opacity": "0"}, 500);
    $('#categories').hide();
    $('#categoriesBtn').animate({"opacity": "0"}, 500);
    $('#categoriesBtn').hide();
    $('#formCategories').animate({"opacity": "1"}, 500);
    $('#formCategories').show();
});

function formCategoriesUp() {
    $('#categories').animate({"opacity": "0"}, 500);
    $('#categories').hide();
    $('#categoriesBtn').animate({"opacity": "0"}, 500);
    $('#categoriesBtn').hide();
    $('#formCategories').animate({"opacity": "1"}, 500);
    $('#formCategories').show();
}

/* #########################################
 #    FUNÇÕES DE LOGIN E LOGOUT          #
 ######################################### */

function sendServletLogin() {

    var login = $('#loginScreenUser').val();
    var password = $('#loginScreenPassWord').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                return false;
            }

            var jsonData = JSON.parse(response);
            var employee = jsonData.employee[0];

            if (employee) {
                $('#formLogin')[0].reset();
                localStorage.setItem('selectedEmployee', employee.id);
                localStorage.setItem('selectedEmployeeName', employee.name);
                $('#userName').html(employee.name.toUpperCase());
                $('#loginScreen').animate({"opacity": "0"}, 500);
                $('#loginScreen').hide();
                $('#dashboard').animate({"opacity": "1"}, 500);
                $('#dashboard').show();
                $('#home').click();
            } else {
                alert("Usuário ou Senha incorretos");
            }

        }
    };

    xhr.open("post", "xServletLogin", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("login=" + login + "&password=" + password);

}

function sendServletLogout() {

    $('#home').click();
    $('#formLogin')[0].reset();
    $('#loginScreenUser').focus();
    localStorage.clear();
    $('#loginScreen').animate({"opacity": "1"}, 500);
    $('#loginScreen').show();
    $('#dashboard').animate({"opacity": "0"}, 500);
    $('#dashboard').hide();

}

/* #########################################
 #    FUNÇÕES QUE SERÃO SUBSTITUÍDAS     #
 ######################################### */

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

/* #########################################
 #         CHAMADAS PARA SERVLETS        #
 #########################################
 # ESSAS FUNÇÕES REALIZAM CHAMADAS PARA  #
 # OS SERVLETS DA APLICAÇÃO, OBECEDENDO  #
 # O PADRÃO ESTABELECIDO ABAIXO:         #
 # ADD - ADICIONAR ELEMENTO              #
 # ALTER - EDITAR ELEMENTO               #
 # RETURN - RETORNAR UM ELEMENTO         #
 # DROP - DELETAR UM ELEMENTO            #
 # REFRESH - RETORNAR TODOS OS ELEMENTOS #
 ######################################### */

/* #########################################
 #    CHAMADAS PARA SERVLETS DE CLIENTES #
 ######################################### */

function sendServletAddClient() {

    var name = $('#cAreaFormClient').val();
    var login = $('#cAreaFormLogin').val();
    var password = $('#cAreaFormPassword').val();
    var checkPassword = $('#cAreaFormCheckPassword').val();
    var cpf = $('#cAreaFormCPF').val();
    var address = $('#cAreaFormAddress').val();
    var number = $('#cAreaFormNumber').val();
    var city = $('#cAreaFormCity').val();
    var neigh = $('#cAreaFormNeigh').val();
    var state = $('#cAreaFormState').val();
    var cep = $('#cAreaFormCEP').val();
    var contact = $('#cAreaFormContact').val();
    var email = $('#cAreaFormEmail').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var call = JSON.parse(xhr.responseText);
            createClient(call.id, call.name, call.cpf, call.contact, call.email);
            $('#cAreaForm')[0].reset();
            $('#formClientsBack').click();
            //sendServletRefreshCall();
        }
    };

    xhr.open("post", "clientRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email);
}

function sendServletAlterClient() {

    var id = localStorage.getItem("selectedClient");
    var name = $('#cAreaFormClient').val();
    var login = $('#cAreaFormLogin').val();
    var password = $('#cAreaFormPassword').val();
    var checkPassword = $('#cAreaFormCheckPassword').val();
    var cpf = $('#cAreaFormCPF').val();
    var address = $('#cAreaFormAddress').val();
    var number = $('#cAreaFormNumber').val();
    var city = $('#cAreaFormCity').val();
    var neigh = $('#cAreaFormNeigh').val();
    var state = $('#cAreaFormState').val();
    var cep = $('#cAreaFormCEP').val();
    var contact = $('#cAreaFormContact').val();
    var email = $('#cAreaFormEmail').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshClients();
            $('#formClientsBack').click();
        }
    };
    xhr.open("post", "clientAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email + "&id=" + id);
}

function sendServletReturnClient(choosenClient) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.clients.length; i++) {
                var client = jsonData.clients[i];
                if (choosenClient.id === client.id) {
                    $('#cAreaFormClient').val(client.name);
                    $('#cAreaFormLogin').val(client.login);
                    $('#cAreaFormPassword').val(client.password);
                    $('#cAreaFormCheckPassword').val(client.password);
                    $('#cAreaFormCPF').val(client.cpf);
                    $('#cAreaFormAddress').val(client.log);
                    $('#cAreaFormNumber').val(client.number);
                    $('#cAreaFormCity').val(client.city);
                    $('#cAreaFormNeigh').val(client.neigh);
                    $('#cAreaFormState').val(client.state);
                    $('#cAreaFormCEP').val(client.zip);
                    $('#cAreaFormContact').val(client.contact);
                    $('#cAreaFormEmail').val(client.email);
                }
            }
        }
    };
    xhr.open("post", "clientRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletDropClient(choosenClient) {

    var r = confirm("Deseja mesmo excluir este Cliente?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenClient.id).remove();
            }
        };

        xhr.open("post", "clientDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenClient.id);

    } else {

    }

}

function sendServletRefreshClients() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#clientTableBody").html("");
                $("#clientTableBody").html("Não existem Clientes cadastrados.");
                return false;
            }

            var jsonData = JSON.parse(response);
            $("#clientTableBody").html("");
            $("#genBudget-formFinancialClient").html("<option value='' disabled selected>Nome do Cliente</option>");
            //DESENHA OS CLIENTES
            for (var i = 0; i < jsonData.clients.length; i++) {
                var client = jsonData.clients[i];
                createClient(client.id, client.name, client.cpf, client.contact, client.email);
                $("#addTicket-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
                $("#alterTicket-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
                $("#fixTicket-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
                $("#reportCall-formClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
                $("#genBudget-formFinancialClient").append("<option value='" + client.name + "'>" + client.name + "</option>");
            }

        }
    };
    xhr.open("post", "clientRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

/* #########################################
 # CHAMADAS PARA SERVLETS DE EMPREGADOS  #
 ######################################### */

function sendServletAddEmployee() {

    var name = $('#eAreaFormClient').val();
    var login = $('#eAreaFormLogin').val();
    var password = $('#eAreaFormPassword').val();
    var checkPassword = $('#eAreaFormCheckPassword').val();
    var cpf = $('#eAreaFormCPF').val();
    var address = $('#eAreaFormAddress').val();
    var number = $('#eAreaFormNumber').val();
    var city = $('#eAreaFormCity').val();
    var neigh = $('#eAreaFormNeigh').val();
    var state = $('#eAreaFormState').val();
    var cep = $('#eAreaFormCEP').val();
    var contact = $('#eAreaFormContact').val();
    var email = $('#eAreaFormEmail').val();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var call = JSON.parse(xhr.responseText);
            sendServletRefreshEmployees();
            $('#eAreaForm')[0].reset();
            $('#formEmployeesBack').click();
        }
    };
    xhr.open("post", "employeeRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email);
}

function sendServletAlterEmployee() {

    var id = localStorage.getItem("selectedEmployee");
    var name = $('#eAreaFormClient').val();
    var login = $('#eAreaFormLogin').val();
    var password = $('#eAreaFormPassword').val();
    var checkPassword = $('#eAreaFormCheckPassword').val();
    var cpf = $('#eAreaFormCPF').val();
    var address = $('#eAreaFormAddress').val();
    var number = $('#eAreaFormNumber').val();
    var city = $('#eAreaFormCity').val();
    var neigh = $('#eAreaFormNeigh').val();
    var state = $('#eAreaFormState').val();
    var cep = $('#eAreaFormCEP').val();
    var contact = $('#eAreaFormContact').val();
    var email = $('#eAreaFormEmail').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshEmployees();
            $('#formEmployeesBack').click();
        }
    };
    xhr.open("post", "employeeAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email + "&id=" + id);
}

function sendServletReturnEmployee(choosenEmployee) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.employees.length; i++) {
                var employee = jsonData.employees[i];
                if (choosenEmployee.id === employee.id) {
                    $('#eAreaFormClient').val(employee.name);
                    $('#eAreaFormLogin').val(employee.login);
                    $('#eAreaFormPassword').val(employee.password);
                    $('#eAreaFormCheckPassword').val(employee.password);
                    $('#eAreaFormCPF').val(employee.cpf);
                    $('#eAreaFormAddress').val(employee.log);
                    $('#eAreaFormNumber').val(employee.number);
                    $('#eAreaFormCity').val(employee.city);
                    $('#eAreaFormNeigh').val(employee.neigh);
                    $('#eAreaFormState').val(employee.state);
                    $('#eAreaFormCEP').val(employee.zip);
                    $('#eAreaFormContact').val(employee.contact);
                    $('#eAreaFormEmail').val(employee.email);
                }
            }
        }
    };
    xhr.open("post", "employeeRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletDropEmployee(choosenEmployee) {

    var r = confirm("Deseja mesmo excluir este Técnico?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenEmployee.id).remove();
            }
        };

        xhr.open("post", "employeeDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenEmployee.id);

    } else {

    }

}

function sendServletRefreshEmployees() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#employeeTableBody").html("");
                $("#employeeTableBody").html("Não existem Técnicos cadastrados.");
                return false;
            }

            var jsonData = JSON.parse(response);

            $("#employeeTableBody").html("");
            //DESENHA OS TÉCNICOS
            for (var i = 0; i < jsonData.employees.length; i++) {
                var employee = jsonData.employees[i];
                createEmployee(employee.id, employee.name, employee.cpf, employee.attr);
                $("#addTicket-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#alterTicket-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#fixTicket-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#reportCall-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
            }

        }
    };
    xhr.open("post", "employeeRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

/* #########################################
 #  CHAMADAS PARA SERVLETS DE CATEGORIAS #
 ######################################### */

function sendServletAddCategory() {

    var description = $('#catAreaDescription').val();
    description = description.toLowerCase();
    description = description.charAt(0).toUpperCase() + description.slice(1);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshCategories();
            $('#home').click();
            formCategoriesBack();
            return false;
        }
    };
    xhr.open("post", "categoryRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("description=" + description);
}

function sendServletAlterCategory() {

    var id = localStorage.getItem("selectedCategory");
    var description = $('#catAreaDescription').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshCategories();
            $('#formCategoriesBack').click();
        }
    };
    xhr.open("post", "categoryAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id + "&description=" + description);

}

function sendServletReturnCategory(choosenCategory) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.categories.length; i++) {
                var category = jsonData.categories[i];
                if (choosenCategory.id === category.id) {
                    $('#catAreaDescription').val(category.description);
                }
            }
        }
    };
    xhr.open("post", "categoryRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletDropCategory(choosenCategory) {

    var r = confirm("Deseja mesmo excluir esta Categoria?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenCategory.id).remove();
                $('#' + choosenCategory.id).remove();
            }
        };

        xhr.open("post", "categoryDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenCategory.id);

    } else {

    }

}

function sendServletRefreshCategories() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                return false;
            }

            var jsonData = JSON.parse(response);

            $("#categories").html("");
            $("#navCategories").html("");
            //DESENHA OS TÉCNICOS
            for (var i = 0; i < jsonData.categories.length; i++) {
                var category = jsonData.categories[i];
                localStorage.setItem('selectedCategory', category.id);
                sendServletRefreshTickets();
                createCategory(category.id, checkNull(localStorage.getItem(category.id + 'id')), category.description);
                createNavCategory(category.id, checkNull(localStorage.getItem(category.id + 'id')), category.description);
            }

        }

    };
    xhr.open("post", "categoryRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

/* #########################################
 #     CHAMADAS PARA SERVLETS DE PEÇAS     # INACABADO ###########
 ######################################### */

function sendServletAddPiece() {

    var name = $('#eAreaFormClient').val();
    var login = $('#eAreaFormLogin').val();
    var password = $('#eAreaFormPassword').val();
    var checkPassword = $('#eAreaFormCheckPassword').val();
    var cpf = $('#eAreaFormCPF').val();
    var address = $('#eAreaFormAddress').val();
    var number = $('#eAreaFormNumber').val();
    var city = $('#eAreaFormCity').val();
    var neigh = $('#eAreaFormNeigh').val();
    var state = $('#eAreaFormState').val();
    var cep = $('#eAreaFormCEP').val();
    var contact = $('#eAreaFormContact').val();
    var email = $('#eAreaFormEmail').val();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var call = JSON.parse(xhr.responseText);
            sendServletRefreshEmployees();
            $('#eAreaForm')[0].reset();
            $('#formEmployeesBack').click();
        }
    };
    xhr.open("post", "employeeRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email);
}

function sendServletAlterPiece() {

    var id = localStorage.getItem("selectedEmployee");
    var name = $('#eAreaFormClient').val();
    var login = $('#eAreaFormLogin').val();
    var password = $('#eAreaFormPassword').val();
    var checkPassword = $('#eAreaFormCheckPassword').val();
    var cpf = $('#eAreaFormCPF').val();
    var address = $('#eAreaFormAddress').val();
    var number = $('#eAreaFormNumber').val();
    var city = $('#eAreaFormCity').val();
    var neigh = $('#eAreaFormNeigh').val();
    var state = $('#eAreaFormState').val();
    var cep = $('#eAreaFormCEP').val();
    var contact = $('#eAreaFormContact').val();
    var email = $('#eAreaFormEmail').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshEmployees();
            $('#formEmployeesBack').click();
        }
    };
    xhr.open("post", "employeeAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&login=" + login + "&password=" + password + "&cpf=" + cpf + "&address=" + address + "&number=" + number + "&city=" + city + "&state=" + state + "&neigh=" + neigh + "&cep=" + cep + "&contact=" + contact + "&email=" + email + "&id=" + id);
}

function sendServletReturnPiece(choosenEmployee) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.employees.length; i++) {
                var employee = jsonData.employees[i];
                if (choosenEmployee.id === employee.id) {
                    $('#eAreaFormClient').val(employee.name);
                    $('#eAreaFormLogin').val(employee.login);
                    $('#eAreaFormPassword').val(employee.password);
                    $('#eAreaFormCheckPassword').val(employee.password);
                    $('#eAreaFormCPF').val(employee.cpf);
                    $('#eAreaFormAddress').val(employee.log);
                    $('#eAreaFormNumber').val(employee.number);
                    $('#eAreaFormCity').val(employee.city);
                    $('#eAreaFormNeigh').val(employee.neigh);
                    $('#eAreaFormState').val(employee.state);
                    $('#eAreaFormCEP').val(employee.zip);
                    $('#eAreaFormContact').val(employee.contact);
                    $('#eAreaFormEmail').val(employee.email);
                }
            }
        }
    };
    xhr.open("post", "employeeRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletDropPiece(choosenEmployee) {

    var r = confirm("Deseja mesmo excluir este Técnico?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenEmployee.id).remove();
            }
        };

        xhr.open("post", "employeeDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenEmployee.id);

    } else {

    }

}

function sendServletRefreshPieces() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#employeeTableBody").html("");
                $("#employeeTableBody").html("Não existem Técnicos cadastrados.");
                return false;
            }

            var jsonData = JSON.parse(response);

            $("#employeeTableBody").html("");
            //DESENHA OS TÉCNICOS
            for (var i = 0; i < jsonData.employees.length; i++) {
                var employee = jsonData.employees[i];
                createEmployee(employee.id, employee.name, employee.cpf, employee.attr);
                $("#addTicket-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#alterTicket-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#fixTicket-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
                $("#reportCall-formEmployee").append("<option value='" + employee.name + "'>" + employee.name + "</option>");
            }

        }
    };
    xhr.open("post", "employeeRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

/* #########################################
 #     CHAMADAS PARA SERVLETS DE ESTOQUE   # INACABADO ###########
 ######################################### */

function sendServletAddStock() {

    var description = $('#eAreaFormClient').val();
    var quantity = $('#eAreaFormLogin').val();
    var value = $('#eAreaFormPassword').val();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var stock = JSON.parse(xhr.responseText);
            sendServletRefreshStock();
            $('#sAreaForm')[0].reset();
            $('#formStockBack').click();
        }
    };

    xhr.open("post", "stockRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("description=" + description + "&quantity=" + quantity + "&value=" + value);

}

function sendServletAlterStock() {

    var id = localStorage.getItem("selectedStock");
    var description = $('#sAreaCrudFormDescription').val();
    var quantity = $('#sAreaCrudFormQuantity').val();
    var value = $('#sAreaCrudFormValue').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshStock();
            $('#formCrudStockBack').click();
        }
    };
    xhr.open("post", "stockAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id + "&description=" + description + "&quantity=" + quantity + "&value=" + value);
}

function sendServletReturnStock(choosenStock) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.stocks.length; i++) {
                var stock = jsonData.stocks[i];
                console.log(stock);
                if (choosenStock.id === stock.id) {
                    $('#sAreaCrudFormDescription').val(stock.description);
                    $('#sAreaPlusFormDescription').val(stock.description);
                    $('#sAreaMinusFormDescription').val(stock.description);
                    $('#sAreaCrudFormQuantity').val(stock.quantity);
                    $('#sAreaCrudFormValue').val(stock.value);
                    localStorage.setItem("selectedStock", choosenStock.id);
                }
            }
        }
    };
    xhr.open("post", "stockRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

function sendServletChangeStock() {

    var id = localStorage.getItem("selectedStock");
    var action = localStorage.getItem("selectedStockAction");
    var quantity = "";

    if (action === "plus") {
        quantity = $('#sAreaPlusFormQuantity').val();
        $('#formPlusStockBack').click();

    } else if (action === "minus") {
        quantity = $('#sAreaMinusFormQuantity').val();
        $('#formMinusStockBack').click();
    }

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshStock();
        }
    };
    xhr.open("post", "stockChange", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id + "&quantity=" + quantity + "&action=" + action);
}

function sendServletDropStock(choosenEmployee) {

    var r = confirm("Deseja mesmo excluir este Técnico?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenEmployee.id).remove();
            }
        };

        xhr.open("post", "employeeDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenEmployee.id);

    } else {

    }

}

function sendServletRefreshStock() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                $("#stockTableBody").html("");
                $("#stockTableBody").html("Não existem Itens cadastrados.");
                return false;
            }

            var jsonData = JSON.parse(response);

            $("#stockTableBody").html("");
            $("#genBudget-formFinancialStock").html("<option value='' disabled selected>Peça Solicitada</option");

            //DESENHA OS ITENS DE ESTOQUE
            for (var i = 0; i < jsonData.stocks.length; i++) {
                var stock = jsonData.stocks[i];
                createStock(stock.id, stock.description, stock.quantity, stock.value);
                $("#genBudget-formFinancialPiece").append("<option value='" + stock.description + "'>" + stock.description + "</option>");
            }

        }
    };
    xhr.open("post", "stockRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

/* #########################################
 #    CHAMADAS PARA SERVLETS DE TICKETS  #
 ######################################### */

function sendServletAddTicket() {

    var category = localStorage.getItem('selectedCategory');
    var client = $('#addTicket-formClient').val();
    var employee = $('#addTicket-formEmployee').val();
    var date = $('#addTicket-formDat').val();
    var description = $('#addTicket-formDescription').val();
    var priority = $('#addTicket-formPriority').val();

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshTickets();
            $('#addTicket-form').trigger('reset');
            return false;
        }
    };
    xhr.open("post", "ticketRegister", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("category=" + category + "&client=" + client + "&employee=" + employee + "&date=" + date + "&description=" + description + "&status=" + status + "&priority=" + priority);
}

function sendServletAlterTicket() {

    var id = localStorage.getItem('selectedTicket');
    var category = localStorage.getItem('selectedCategory');
    var client = $('#alterTicket-formClient').val();
    var employee = $('#alterTicket-formEmployee').val();
    var date = $('#alterTicket-formDat').val();
    var description = $('#alterTicket-formDescription').val();
    var priority = $('#alterTicket-formPriority').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshTickets();
            $('#alterTicket-form').trigger('reset');
            $('#alterPanelTitleBtn').click();
        }
    };
    xhr.open("post", "ticketAlter", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id + "&category=" + category + "&client=" + client + "&employee=" + employee + "&date=" + date + "&description=" + description + "&priority=" + priority);

}

function sendServletFixTicket() {

    var id = localStorage.getItem('selectedTicket');
    var category = localStorage.getItem('selectedCategory');
    var client = $('#fixTicket-formClient').val();
    var employee = $('#fixTicket-formEmployee').val();
    var date = $('#fixTicket-formDat').val();
    var description = $('#fixTicket-formDescription').val();
    var priority = $('#fixTicket-formPriority').val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sendServletRefreshTickets();
            $('#fixTicket-form').trigger('reset');
            $('#fixPanelTitleBtn').click();
        }
    };
    xhr.open("post", "ticketFix", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id + "&category=" + category + "&client=" + client + "&employee=" + employee + "&date=" + date + "&description=" + description + "&priority=" + priority);

}

function sendServletReturnTicket(choosenTicket, condition) {

    localStorage.setItem('selectedTicket', choosenTicket.id);
    var category = localStorage.getItem('selectedCategory');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            var jsonData = JSON.parse(response);
            for (var i = 0; i < jsonData.tickets.length; i++) {
                var ticket = jsonData.tickets[i];
                console.log(ticket);
                if (choosenTicket.id === ticket.id) {
                    if (condition === 'fix') {
                        $('#fixTicket-formClient').val(ticket.client);
                        $('#fixTicket-formEmployee').val(ticket.employee);
                        $('#fixTicket-formDat').val(ticket.dat);
                        $('#fixTicket-formDescription').val(ticket.description);
                        $('#fixTicket-formPriority').val(ticket.priority);
                    } else if (condition === 'alter') {
                        $('#alterTicket-formClient').val(ticket.client);
                        $('#alterTicket-formEmployee').val(ticket.employee);
                        $('#alterTicket-formDat').val(ticket.dat);
                        $('#alterTicket-formDescription').val(ticket.description);
                        $('#alterTicket-formPriority').val(ticket.priority);
                    }
                }
            }
        }
    };
    xhr.open("post", "ticketRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("category=" + category);
}

function sendServletDropTicket(choosenTicket) {

    var r = confirm("Deseja mesmo excluir este Ticket?");
    if (r === true) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $('#' + choosenCategory.id).remove();
                $('#' + choosenCategory.id).remove();
            }
        };

        xhr.open("post", "ticketDrop", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("id=" + choosenTicket.id);

    } else {

    }

}

function sendServletRefreshTickets() {

    var category = localStorage.getItem('selectedCategory');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var response = xhr.responseText;
            try {
                var jsonData = JSON.parse(response);
            } catch (err) {
                return false;
            }

            var jsonData = JSON.parse(response);

            $("#pendingTickets").html("");
            var dateNow = myDat(new Date);
            var count = 0;

            //DESENHA OS TICKETS
            for (var i = 0; i < jsonData.tickets.length; i++) {

                var ticket = jsonData.tickets[i];

                if (ticket.status === 'false') {
                    createTicket(ticket.id, ticket.client, ticket.description);
                    count++;
                }

            }

            localStorage.setItem(category + 'id', count);

            //MANTENDO A MESMA DATA ATUAL
            var realDateNow = new Object();
            equalDat(dateNow, realDateNow);

            //DESENHA O  GRÁFICO DE TICKETS PENDENTES

            //VETORES QUE RECEBEM OS TICKETS
            var valuesSVG = [];
            var valuesSVGReady = [];
            for (var o = 0; o < 21; o++) {

                var countTickets = 0;
                var countReadyTickets = 0;
                for (var s = 0; s < jsonData.tickets.length; s++) {
                    var ticket = jsonData.tickets[s];
                    var convertedTicket = toMyDat(ticket.dat);
                    if (convertedTicket.day === dateNow.day) {
                        if (convertedTicket.month === dateNow.month) {
                            if (convertedTicket.year === dateNow.year) {
                                if (ticket.status === 'false') {
                                    countTickets++;
                                }
                                if (ticket.status !== 'false') {
                                    countReadyTickets++;
                                }
                            }
                        }
                    }
                }

                minusDat(dateNow, 1);
                valuesSVG[o] = countTickets;
                valuesSVGReady[o] = countReadyTickets;
            }

            drawSVGCalls(valuesSVG, valuesSVGReady, realDateNow);

        }
    };
    xhr.open("post", "ticketRefresh", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("category=" + category);
}

/* #########################################
 #     FUNÇÕES E SCRIPTS AUXILIARES        #
 #########################################
 # ESSAS FUNÇÕES REALIZAM TAREFAS        #
 # AUXILIARES ÀS FUNÇÕES PRIMÁRIAS,      #
 # LIVRANDO RESPONSABILIDADES DAS MESMAS #
 ######################################### */

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
            closeCollapsePanels($('#collapseFour'));
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            $('#fixPanelTitleBtn').click();
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseThree'));
            closeCollapsePanels($('#collapseFour'));
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            $('#reportPanelTitleBtn').click();
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseFour'));
            return;
        } else if ($(button).attr('id') === 'collapseFour') {
            $('#alterPanelTitleBtn').click();
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseThree'));
            return;
        }
    } else if (check === true) {
        if ($(button).attr('id') === 'collapseOne') {
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseThree'));
            closeCollapsePanels($('#collapseFour'));
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseThree'));
            closeCollapsePanels($('#collapseFour'));
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseFour'));
            return;
        } else if ($(button).attr('id') === 'collapseFour') {
            closeCollapsePanels($('#collapseOne'));
            closeCollapsePanels($('#collapseTwo'));
            closeCollapsePanels($('#collapseThree'));
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
        if ($(button).attr('id') === 'collapseOne') {
            $('#addPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') === 'collapseTwo') {
            $('#fixPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') === 'collapseThree') {
            $('#reportPanelTitleBtn').click();
            return;
        } else if ($(button).attr('id') === 'collapseFour') {
            $('#alterPanelTitleBtn').click();
            return;
        }

    }
    return;
}

//SE O ITEM FOR NULO, RETORNA ZERO NA QTD DE TICKETS
function checkNull(item) {

    if (item === "null") {
        return 0;
    } else if (item === null) {
        return 0;
    } else {
        return item;
    }
}

//EXECUTA AO INICIAR
function codeAddress() {
    //localStorage.clear();
    $('#home').click();
    createCategoryButton();
    $("#reportCall-formResult").css("visibility", "hidden");
    $('#home').click();
    $('#navStock').click();
}

$(document).ready(function () {

    var locStr = localStorage.getItem('selectedEmployee');

    if (locStr) {
        $('#loginScreen').animate({"opacity": "0"}, 500);
        $('#loginScreen').hide();
        $('#dashboard').animate({"opacity": "1"}, 500);
        $('#dashboard').show();
    } else {
        $('#loginScreen').animate({"opacity": "1"}, 500);
        $('#loginScreen').show();
        $('#dashboard').animate({"opacity": "0"}, 500);
        $('#dashboard').hide();
    }
    $('#home').click();
});

window.onload = codeAddress;

/* #########################################
 #    VARIÁVEIS GLOBAIS                  #
 ######################################### */

var addTicketForm = '<form id="addTicket-form" action="JavaScript:sendServletAddTicket();">' +
        '<div class="modal-body">' +
        '<select id="addTicket-formClient" name="client" class="form-control inputClient" required>' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<input id="addTicket-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado" required />' +
        '<select id="addTicket-formEmployee" name="tec" class="form-control inputTec" required>' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
        '<input id="addTicket-formDescription" name="description" class="form-control inputComment" type="text" placeholder="Descrição da Solicitação" maxlength="250" required>' +
        '</div><div class="modal-footer"><div>' +
        '<button type="submit"  class="btn btn-danger">Adicionar</button>' +
        '</div></div></form>';

var changeTicketForm = '<form id="alterTicket-form" action="JavaScript:sendServletAlterTicket();">' +
        '<div class="modal-body">' +
        '<select id="alterTicket-formClient" name="client" class="form-control inputClient" required>' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<input id="alterTicket-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado" required />' +
        '<select id="alterTicket-formEmployee" name="tec" class="form-control inputTec" required>' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
        '<input id="alterTicket-formDescription" name="description" class="form-control inputComment" type="text" placeholder="Descrição da Solicitação" maxlength="250" required>' +
        '</div><div class="modal-footer"><div>' +
        '<button type="submit"  class="btn btn-danger">Alterar</button>' +
        '</div></div></form>';

var fixTicketForm = '<form id="fixTicket-form" action="JavaScript:sendServletFixTicket();">' +
        '<div id="fixTicket-formselectedCall" class="hidden"></div>' +
        '<div class="modal-body">' +
        '<select id="fixTicket-formClient" name="client" class="form-control inputClient" required>' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<input id="fixTicket-formDat" name="date" type="date" class="form-control inputCalendar" placeholder="Data do Chamado"/>' +
        '<select id="fixTicket-formEmployee" name="tec" class="form-control inputTec" required>' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
        '<input id="fixTicket-formDescription" name="description" class="form-control inputComment" type="text" placeholder="Insira aqui os procedimentos realizados" maxlength="250" required>' +
        '<br>' +
        '<div id="fixTicket-formResult" class="text-center"></div>' +
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
        '<select id="reportCall-formClient" name="client" class="form-control inputClient">' +
        '<option value="" disabled selected>Nome do Cliente</option>' +
        '</select>' +
        '<select id="reportCall-formTec" name="tec" class="form-control inputTec">' +
        '<option value="" disabled selected>Nome do Técnico</option>' +
        '</select>' +
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
