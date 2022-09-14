$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tag_inp").autocomplete({
        source: availableTags
    });
});

var tags_list = '';
$('#taglist_box').hide();
function add_tag(tag_value) {
    if (tag_value.length >= 3) {
        tags_list += (tag_value + ',');
        $('#tags_list').val(tags_list);

        var remove_tag_icon = $('<i/>', {
            class: 'fa-solid fa-circle-xmark mt-1 ms-2'
        });

        var tag = $('<p/>', {
            class: 'tag m-1',
            text: tag_value,
            onclick: 'remove_tag(this)',
        });

        tag.attr('id', 'tagid_' + tag_value).append(remove_tag_icon);
        $('#taglist_box').append(tag).show();
        $('#tag_inp').val('');
    }
}

$(window).on('keydown', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        add_tag($('#tag_inp').val());
        return false;
    }
});

function remove_tag(obj) {
    var data = $('#' + obj.id);
    tags_list = tags_list.replace((data.text() + ','), '');
    $('#tags_list').val(tags_list);
    data.remove();

    if (tags_list === '') $('#taglist_box').hide();
}