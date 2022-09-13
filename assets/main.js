// var tags_list = '';
// var selected_tag = 'none';
$('#tag-dropdown').hide();


// function dropdown_search() {
//     $('#tag-dropdown').show();
//     tags_list_li = $('#tags_list_ul li');

//     $('#tag_inp').on('keydown', function (e) {
//         if (e.which === 40) {
//             print('arrow down');
//             nav_p = $('#tags_list_ul .nav-item p');

//             $(nav_p[0]).addClass('selected');

//         }
//     });

//     var tag_input, filter, tags_list_li, p, txtValue;

//     tag_input = $('#tag_inp');
//     filter = tag_input.val().toLowerCase();

//     for (var i = 0; i < tags_list_li.length; i++) {
//         p = $(tags_list_li[i]).find('p')[0];

//         txtValue = $(p).text();
//         if (txtValue.toLowerCase().indexOf(filter) > -1) {
//             $(tags_list_li[i]).removeClass('d-none');
//         }
//         else {
//             $(tags_list_li[i]).addClass('d-none');
//         }
//     }
// }

// function select_tag(obj) {
//     var p = $('#' + obj.id);
//     selected_tag = p.text();
//     selected_tag = selected_tag.trim();
//     add_tag(selected_tag);
//     $('#tag-dropdown').hide();
// }

function add_tag(tag_value) {
    var remove_tag_icon = $('<i/>', {
        class: 'fa-solid fa-circle-xmark mt-1 ms-2'
    });

    var tag = $('<p/>', {
        class: 'tag m-1',
        text: tag_value,
        onclick: 'remove_tag(this)',
    });

    tag.attr('id', 'tagid_' + tag_value);

    tags_list += (tag_value + ',');
    $('#tags_list').val(tags_list);

    tag.css('cursor', 'pointer');
    tag.append(remove_tag_icon);

    $('#taglist_box').append(tag);
    $('#taglist_box').removeClass('d-none');

    $('#tag_inp').val('');
}

function remove_tag(obj) {
    var data = $('#' + obj.id);
    tags_list = tags_list.replace((data.text() + ','), '');
    $('#tags_list').val(tags_list);
    data.remove();

    if (tags_list === '') {
        $('#taglist_box').addClass('d-none');
    }
}

// $('#tag_inp').on('input', function (e) {
//     dropdown_search();
// });

$(window).on('keydown', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        var tag_inp = $('#tag_inp').val();
        add_tag(tag_inp);
        $('#tag-dropdown').hide();
        return false;
    }

});

// $('#tag_inp').focus(function () {
//     print('focus');
//     dropdown_search();
// });


// $('#tag-dropdown').mouseover(function () {
//     $('#tag-dropdown').show();
// }).blur(function () {
//     $('#tag-dropdown').hide();
// });

// $(document).click(function () {
//     $('#tag-dropdown').hide();
// });


function print(str) {
    console.log(str);
}


$( function() {
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
    $( "#tag_inp" ).autocomplete({
      source: availableTags
    });
  } );