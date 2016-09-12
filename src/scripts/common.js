/*jslint maxerr: 50, indent: 4 */
/*global window, document, $*/
$(function () {
    'use strict';
    
    var quoteForm = $('#quoteForm'),
        quoteFormFields = quoteForm.find('input, textarea');

    quoteFormFields.bind('keyup keydown keypress', function () {
        var thisField = $(this);
        if (thisField.val() === '') {
            thisField.siblings('label').show();
        } else {
            thisField.siblings('label').hide();
        }
    });

    $('#outsideGardenElectrics').bind('click', function (e) {
        e.preventDefault();
        $('#outsideGardenElectricsList').dialog({
            height: 300,
            modal: true,
            resizable: false,
            title: 'Outside & garden electrics',
            width: 500
        });
    });

    $('#kitchenElectrics').bind('click', function (e) {
        e.preventDefault();
        $('#kitchenElectricsList').dialog({
            height: 300,
            modal: true,
            resizable: false,
            title: 'Kitchen electrics',
            width: 500
        });
    });

    $('#bathroomElectrics').bind('click', function (e) {
        e.preventDefault();
        $('#bathroomElectricsList').dialog({
            height: 300,
            modal: true,
            resizable: false,
            title: 'Bathroom electrics',
            width: 500
        });
    });
    
    $('#powerSupplies').bind('click', function (e) {
        e.preventDefault();
        $('#powerSuppliesList').dialog({
            height: 300,
            modal: true,
            resizable: false,
            title: 'Power supplies',
            width: 500
        });
    });
    
    $('#heating').bind('click', function (e) {
        e.preventDefault();
        $('#heatingList').dialog({
            height: 300,
            modal: true,
            resizable: false,
            title: 'Heating',
            width: 500
        });
    });
    
    $('#generalElectrics').bind('click', function (e) {
        e.preventDefault();
        $('#generalElectricsList').dialog({
            height: 300,
            modal: true,
            resizable: false,
            title: 'General electrics',
            width: 500
        });
    });
    
});