 $(document).ready(function(){

 // insertion_section
    $("input").focus(function() {
        $(this).css("opacity",1)
    })
    $("input").blur(function() {
        $(this).css("opacity",.2)
    })

    // close tr event
    $(".close").click(function(){
        $(this).parents(".tab").hide(500)
    })

    // add book info
    $("#add").click(function(){
        let book_name = $("#bookName").val(),
            book_author = $("#authorName").val(),
            book_publisher = $("#publisherName").val(),
            book_number = $("#numberPage").val(),
            book_serial = $("#serialNumber").val(),
            new_tr = document.createElement("tr"),
            new_th_book_name = document.createElement("th"),
            new_th_book_author = document.createElement("td"),
            new_th_book_publisher = document.createElement("td"),
            new_th_book_page = document.createElement("td"),
            new_th_book_serial = document.createElement("td"),
            table_book_name = document.createTextNode(book_name),
            table_book_author = document.createTextNode(book_author),
            table_book_publisher = document.createTextNode(book_publisher),
            table_book_number = document.createTextNode(book_number),
            table_book_serial = document.createTextNode(book_serial);

        // add txt
        new_th_book_name.appendChild(table_book_name);
        new_th_book_author.appendChild(table_book_author);
        new_th_book_publisher.appendChild(table_book_publisher);
        new_th_book_page.appendChild(table_book_number);
        new_th_book_serial.appendChild(table_book_serial);
        

        // add new_tr --> td
        let name_tab = new_tr.appendChild(new_th_book_name);
        let author_tab = new_tr.appendChild(new_th_book_author);
        let publisher_tab = new_tr.appendChild(new_th_book_publisher);
        let page_tab = new_tr.appendChild(new_th_book_page);
        let serial_tab = new_tr.appendChild(new_th_book_serial);
        new_th_book_name.setAttribute("scope","row")

        // add new_tr --> table
        let new_table = document.getElementById("tabs");
        new_table.appendChild(new_tr);
        new_tr.setAttribute("class","tab");
        

        // close button
        let but_td = document.createElement("td"),
            but = document.createElement("button"),
            but_span = document.createElement("span"),
            span_txt = document.createTextNode("X");

        but_td.appendChild(but);
        but.appendChild(but_span);
        but_span.appendChild(span_txt);
        new_tr.appendChild(but_td);

        but.setAttribute("type","button");
        but.setAttribute("class","close");
        but.setAttribute("aria-label","Close");
        but_span.setAttribute("aria-hidden","true");

        // click --> form reset
        this.form.reset();

        // close form item
        $(".close").click(function(){
            $(this).parents(".tab").hide(500)

        })

        
    })
    
})

