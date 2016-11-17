var oldgpa = localStorage["gpa"];
var newuser = !oldgpa;

var sci = 6;
var arts = 5;
var hy = 2.5;
var pe = 1;
var total_credits = 0;
var classcount = 0;
var payoff = [];
var places = [];
var grades = [];
var uwgpa = [];
var wgpa = [];
var wcgpa = [];
var flags = [true, true, true, true, true, true, true, true];

function placement(str)
{
	if(str.indexOf('AP') > -1 || str.indexOf('Honors') > -1)
		return 0;
	if(str.indexOf('Advanced') > -1)
		return 1;
	if(str.indexOf('CPA') > -1)
		return 2;
	if(str.indexOf('CPB') > -1)
		return 3;
	return NaN;
}

function gpa(grade, place)
{
	if(grade <= 59.4)
		return 0;
	if(place == 0)
	{
		if(grade > 59.4 && grade <= 62.4)
			return 1.45;
		if(grade > 62.4 && grade <= 66.4)
			return 1.75;
		if(grade > 66.4 && grade <= 69.4)
			return 2.05;
		if(grade > 69.4 && grade <= 72.4)
			return 2.45;
		if(grade > 72.4 && grade <= 76.4)
			return 2.75;
		if(grade > 76.4 && grade <= 79.4)
			return 3.05;
		if(grade > 79.4 && grade <= 82.4)
			return 3.45;
		if(grade > 82.4 && grade <= 86.4)
			return 3.75;
		if(grade > 86.4 && grade <= 89.4)
			return 4.05;
		if(grade > 89.4 && grade <= 92.4)
			return 4.45;
		if(grade > 92.4 && grade <= 97.4)
			return 4.75;
		if(grade > 97.4)
			return 5.05;
	}
	if(place == 1)
	{
		if(grade > 59.4 && grade <= 62.4)
			return 1.2;
		if(grade > 62.4 && grade <= 66.4)
			return 1.5;
		if(grade > 66.4 && grade <= 69.4)
			return 1.8;
		if(grade > 69.4 && grade <= 72.4)
			return 2.2;
		if(grade > 72.4 && grade <= 76.4)
			return 2.5;
		if(grade > 76.4 && grade <= 79.4)
			return 2.8;
		if(grade > 79.4 && grade <= 82.4)
			return 3.2;
		if(grade > 82.4 && grade <= 86.4)
			return 3.5;
		if(grade > 86.4 && grade <= 89.4)
			return 3.8;
		if(grade > 89.4 && grade <= 92.4)
			return 4.2;
		if(grade > 92.4 && grade <= 97.4)
			return 4.5;
		if(grade > 97.4)
			return 4.8;
	}
	if(place == 2)
	{
		if(grade > 59.4 && grade <= 62.4)
			return 0.95;
		if(grade > 62.4 && grade <= 66.4)
			return 1.25;
		if(grade > 66.4 && grade <= 69.4)
			return 1.55;
		if(grade > 69.4 && grade <= 72.4)
			return 1.95;
		if(grade > 72.4 && grade <= 76.4)
			return 2.25;
		if(grade > 76.4 && grade <= 79.4)
			return 2.55;
		if(grade > 79.4 && grade <= 82.4)
			return 2.95;
		if(grade > 82.4 && grade <= 86.4)
			return 3.25;
		if(grade > 86.4 && grade <= 89.4)
			return 3.55;
		if(grade > 89.4 && grade <= 92.4)
			return 3.95;
		if(grade > 92.4 && grade <= 97.4)
			return 4.25;
		if(grade > 97.4)
			return 4.55;
	}
	if(place == 3)
	{
		if(grade > 59.4 && grade <= 62.4)
			return 0.7;
		if(grade > 62.4 && grade <= 66.4)
			return 1.0;
		if(grade > 66.4 && grade <= 69.4)
			return 1.3;
		if(grade > 69.4 && grade <= 72.4)
			return 1.7;
		if(grade > 72.4 && grade <= 76.4)
			return 2.0;
		if(grade > 76.4 && grade <= 79.4)
			return 2.3;
		if(grade > 79.4 && grade <= 82.4)
			return 2.7;
		if(grade > 82.4 && grade <= 86.4)
			return 3.0;
		if(grade > 86.4 && grade <= 89.4)
			return 3.3;
		if(grade > 89.4 && grade <= 92.4)
			return 3.7;
		if(grade > 92.4 && grade <= 97.4)
			return 4.0;
		if(grade > 97.4)
			return 4.3;
	}
	return NaN;
}

function credit(course)
{
	if((course >= 100 && course <= 400) || (course >= 490 && course <= 540))
	{
		return arts;
	}
	else if(course >= 400 && course < 490)
	{
		return sci;
	}
	else if(course >= 810 && course <= 845)
	{
		return pe;
	}
	else
	{
		return arts;
	}
}

if($(".cellRight").length == 22)
{
	var i = 1;
	var c = 0;
	var temp;
	do
	{
		c++;
		if ($(".cellRight")[i])
			temp = parseFloat($(".cellRight")[i].innerHTML);
		if(i <= 16)
		{
			if(!isNaN(temp))
			{
				grades.push(temp);
			}
			else
			{
				grades.push(temp);
				flags[c] = false;
			}
			i += 3;
		}
	} while(i < 16)

	//16
	if($(".cellRight")[i])
		temp = parseFloat($(".cellRight")[i].innerHTML);
	if(!isNaN(temp))
	{
		grades.push(temp);
	}
	else
	{
		grades.push(temp);
		flags[c] = false;
	}

	//18
	c++;	
	i = 18;
	if($(".cellRight")[i])
		temp = parseFloat($(".cellRight")[i].innerHTML);
	if(!isNaN(temp))
	{
		grades.push(temp);
	}
	else
	{
		grades.push(NaN);
		flags[c] = false;
	}

	//19
	c++;	
	i++;
	if($(".cellRight")[i])
		temp = parseFloat($(".cellRight")[i].innerHTML);
	if(!isNaN(temp))
	{
		grades.push(temp);
	}
	else
	{
		grades.push(NaN);
		flags[c] = false;
	}
}

for(var i = 0; i < flags.length; i++)
{
	if(flags[i])
	{
		if($(".categorytab")[i])
		{
			places.push(placement($(".categorytab")[i].innerHTML))
			payoff.push(credit(parseInt($(".categorytab")[i].getAttribute("onclick").substring(43, 46))));
		}
	}
	else
	{
		places.push(0);
		payoff.push(0);
	}
}

var total_credits = payoff.reduce(function(a, b) { return a+b; } );

for(var i = 0; i < flags.length; i++)
{
	if(flags[i])
	{
		uwgpa.push(gpa(grades[i], 2));
		wgpa.push(gpa(grades[i], places[i]));
		wcgpa.push(gpa(grades[i], places[i])*payoff[i]);
	}
	else
	{
		uwgpa.push(-1);
		wgpa.push(-1);
		wcgpa.push(-1);
	}
}

for(var i = 0; i < flags.length; i++)
{
	if(uwgpa[i] >= 0)
		classcount++;
		
}

var avg_grade = grades.reduce(function(a, b) 
{
	if(isNaN(a))
		return b;
	if(isNaN(b))
		return a
	else
		return a+b;
})/classcount; 

var avg_uwgpa = uwgpa.reduce(function(a, b) 
{
	if(a < 0)
		return b;
	if(b < 0)
		return a;
	if(a < 0 && b < 0)
		return 0;
	else
		return a+b;
})/classcount; 

var avg_wgpa = wgpa.reduce(function(a, b) 
{
	if(a < 0)
		return b;
	if(b < 0)
		return a;
	if(a < 0 && b < 0)
		return 0;
	else
		return a+b;
})/classcount;
 
var avg_wcgpa = wcgpa.reduce(function(a, b) 
{
	if(a < 0)
		return b;
	if(b < 0)
		return a;
	if(a < 0 && b < 0)
		return 0;
	else
		return a+b;
})/total_credits;

localStorage["gpa"] = avg_wcgpa;
if(newuser)
{
	alert("***GRADES***\nAverage Grade=" + avg_grade + "\nAverage GPA (Unweighted)="
	+ avg_uwgpa + "\nAverage GPA (Weighted)=" + avg_wgpa + "\nAverage GPA (Weighted + Credits)=" + avg_wcgpa);
}
else
{
	var perchange = Math.abs(avg_wcgpa-oldgpa)/oldgpa;
	perchange = (avg_wcgpa/oldgpa) > 1 ? perchange : -perchange;
	alert("***GRADES***\nAverage Grade=" + avg_grade + "\nAverage GPA (Unweighted)="
	+ avg_uwgpa + "\nAverage GPA (Weighted)=" + avg_wgpa + "\nAverage GPA (Weighted + Credits)=" + avg_wcgpa +
	"\nLast GPA=" + oldgpa + " (" + (perchange > 0 ? "+" : "") + (perchange*100) + "% change)");
}
