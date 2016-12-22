var oldgpa = localStorage["gpa"];
var newuser = !oldgpa;
 
var sci = 6;
var arts = 5;
var hy = 2.5;
var pe = 1;
var total_credits = 0;
var classcount = 0;
var indexs = [];
var payoff = [];
var places = [];
var grades = [];
var uwgpa = [];
var wgpa = [];
var wcgpa = [];
 
function add(a, b) {
    if (a < 0)
        return b;
    if (b < 0)
        return a;
    if (a < 0 && b < 0)
        return 0;
    else
        return a + b;
}

function placement(str) {
    if (str.indexOf("AP") > -1 || str.indexOf("Honors") > -1)
        return 0;
    if (str.indexOf("Advanced") > -1)
        return 1;
    if (str.indexOf("CPA") > -1)
        return 2;
    if (str.indexOf("CPB") > -1)
        return 3;
    return NaN;
}
 
function gpa(grade, place) {
    if (grade <= 59.4)
        return 0;
    if (place == 0) {
        if (grade > 59.4 && grade <= 62.4)
            return 1.45;
        if (grade > 62.4 && grade <= 66.4)
            return 1.75;
        if (grade > 66.4 && grade <= 69.4)
            return 2.05;
        if (grade > 69.4 && grade <= 72.4)
            return 2.45;
        if (grade > 72.4 && grade <= 76.4)
            return 2.75;
        if (grade > 76.4 && grade <= 79.4)
            return 3.05;
        if (grade > 79.4 && grade <= 82.4)
            return 3.45;
        if (grade > 82.4 && grade <= 86.4)
            return 3.75;
        if (grade > 86.4 && grade <= 89.4)
            return 4.05;
        if (grade > 89.4 && grade <= 92.4)
            return 4.45;
        if (grade > 92.4 && grade <= 97.4)
            return 4.75;
        if (grade > 97.4)
            return 5.05;
    }
    if (place == 1) {
        if (grade > 59.4 && grade <= 62.4)
            return 1.2;
        if (grade > 62.4 && grade <= 66.4)
            return 1.5;
        if (grade > 66.4 && grade <= 69.4)
            return 1.8;
        if (grade > 69.4 && grade <= 72.4)
            return 2.2;
        if (grade > 72.4 && grade <= 76.4)
            return 2.5;
        if (grade > 76.4 && grade <= 79.4)
            return 2.8;
        if (grade > 79.4 && grade <= 82.4)
            return 3.2;
        if (grade > 82.4 && grade <= 86.4)
            return 3.5;
        if (grade > 86.4 && grade <= 89.4)
            return 3.8;
        if (grade > 89.4 && grade <= 92.4)
            return 4.2;
        if (grade > 92.4 && grade <= 97.4)
            return 4.5;
        if (grade > 97.4)
            return 4.8;
    }
    if (place == 2) {
        if (grade > 59.4 && grade <= 62.4)
            return 0.95;
        if (grade > 62.4 && grade <= 66.4)
            return 1.25;
        if (grade > 66.4 && grade <= 69.4)
            return 1.55;
        if (grade > 69.4 && grade <= 72.4)
            return 1.95;
        if (grade > 72.4 && grade <= 76.4)
            return 2.25;
        if (grade > 76.4 && grade <= 79.4)
            return 2.55;
        if (grade > 79.4 && grade <= 82.4)
            return 2.95;
        if (grade > 82.4 && grade <= 86.4)
            return 3.25;
        if (grade > 86.4 && grade <= 89.4)
            return 3.55;
        if (grade > 89.4 && grade <= 92.4)
            return 3.95;
        if (grade > 92.4 && grade <= 97.4)
            return 4.25;
        if (grade > 97.4)
            return 4.55;
    }
    if (place == 3) {
        if (grade > 59.4 && grade <= 62.4)
            return 0.7;
        if (grade > 62.4 && grade <= 66.4)
            return 1.0;
        if (grade > 66.4 && grade <= 69.4)
            return 1.3;
        if (grade > 69.4 && grade <= 72.4)
            return 1.7;
        if (grade > 72.4 && grade <= 76.4)
            return 2.0;
        if (grade > 76.4 && grade <= 79.4)
            return 2.3;
        if (grade > 79.4 && grade <= 82.4)
            return 2.7;
        if (grade > 82.4 && grade <= 86.4)
            return 3.0;
        if (grade > 86.4 && grade <= 89.4)
            return 3.3;
        if (grade > 89.4 && grade <= 92.4)
            return 3.7;
        if (grade > 92.4 && grade <= 97.4)
            return 4.0;
        if (grade > 97.4)
            return 4.3;
    }
    return NaN;
}
 
function credit(course) {
	if(course == 143 || course == 149 || course == 154 || course == 152 || course == 156 || course == 150 ||
	course == 193 || course == 180 || course == 267 || course == 266 || course == 250 || course == 269 ||
	course == 251 || course == 256 || course == 362 || course == 371 || course == 370 || course == 373 ||
	course == 482 || course == 630 || course == 634 || course == 635 || course == 711 || course == 725 ||
	course == 723 || course == 726) {
		return hy;
	} if ((course >= 100 && course <= 400) || (course >= 490 && course <= 540)) {
        return arts;
    } else if (course >= 400 && course < 490) {
        return sci;
    } else if (course >= 810 && course <= 845) {
        return pe;
    } else {
        return arts;
    }
}
 
var count = 0;
for (var i = 0; i < $(".cellRight")
    .length; i++) {
    var temp = parseFloat($(".cellRight")[i].innerHTML.substring(1138, 1269));
    if (!isNaN(temp)) {
        //console.log("Grade at cellRight #" + i + ". Grade: " + temp);
        indexs.push(i);
        grades.push(temp);
        count++;
    }
}
//console.log("count: " + count);
 
for (var i = 0; i < count; i++) {
    if ($(".categorytab")[i]) {
        places.push(placement($(".categorytab")[i].innerHTML))
        payoff.push(credit(parseInt($(".categorytab")[i].getAttribute("onclick")
            .substring(43, 46))));
    }
}
 
var total_credits = payoff.reduce(function(a, b) {
    return a + b;
});
 
for (var i = 0; i < count; i++) {
    uwgpa.push(gpa(grades[i], 2));
    wgpa.push(gpa(grades[i], places[i]));
    wcgpa.push(gpa(grades[i], places[i]) * payoff[i]);
}
 
var avg_grade = grades.reduce(function(a, b) {
    if (isNaN(a))
        return b;
    if (isNaN(b))
        return a
    else
        return a + b;
}) / count;
 
var avg_uwgpa = uwgpa.reduce(add(a, b)) / count;
 
var avg_wgpa = wgpa.reduce(add(a, b)) / count;
 
var avg_wcgpa = wcgpa.reduce(add(a, b)) / total_credits;
 
var w = window.open('', 'Grades', 'width=640,height=480,status=1');
 
localStorage["gpa"] = avg_wcgpa;
w.document.write("<span style=\"font-family:arial;color:blue;font-size:24\">");
if (newuser) {
    w.document.write("***GRADES***</br>Average Grade=" + avg_grade + "</br>Average GPA (Unweighted)=" +
        avg_uwgpa + "</br>Average GPA (Weighted)=" + avg_wgpa + "</br>Average GPA (Weighted + Credits)=" + avg_wcgpa);
	w.document.write("</span>");
    w.document.close();
} else {
    var perchange = Math.abs(avg_wcgpa - oldgpa) / oldgpa;
    perchange = (avg_wcgpa / oldgpa) > 1 ? perchange : -perchange;
    w.document.write("***GRADES***</br>Average Grade=" + avg_grade + "</br>Average GPA (Unweighted)=" +
        avg_uwgpa + "</br>Average GPA (Weighted)=" + avg_wgpa + "</br>Average GPA (Weighted + Credits)=" + avg_wcgpa +
        "</br>Last GPA=" + oldgpa + " (" + (perchange > 0 ? "+" : "") + (perchange * 100) + "% change)");
	w.document.write("</span>");
    w.document.close();
}
