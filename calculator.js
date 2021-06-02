var inter = window / setInterval(update, 10);

function update() {
    var mark = document.getElementById("t2").value / document.getElementById("t3").value;

    var mark1 = document.getElementById("t12").value / document.getElementById("t13").value;

    var mark2 = document.getElementById("t22").value / document.getElementById("t23").value;

    var mark3 = document.getElementById("t32").value / document.getElementById("t33").value;
    mark3 = mark3 * 100;
    mark2 = mark2 * 100;
    mark1 = mark1 * 100;
    mark = mark * 100;
    if (isNaN(mark)) {
        mark = 0;

    }
    if (isNaN(mark1)) {
        mark1 = 0;

    }
    if (isNaN(mark2)) {
        mark2 = 0;

    }
    if (isNaN(mark3)) {
        mark3 = 0;
    }
    document.getElementById("t34").innerHTML = mark3;
    document.getElementById("t24").innerHTML = mark2;
    document.getElementById("t14").innerHTML = mark1;
    document.getElementById("t4").innerHTML = mark;
}

function ms() {
    var mark = Number(document.getElementById("t2").value / document.getElementById("t3").value);
    var mark1 = Number(document.getElementById("t12").value / document.getElementById("t13").value);
    var mark2 = Number(document.getElementById("t22").value / document.getElementById("t23").value);
    var mark3 = Number(document.getElementById("t32").value / document.getElementById("t33").value);
    console.log(mark);
    console.log(mark1);
    console.log(mark2);
    console.log(mark3);
    var num = 4;
    if (isNaN(mark)) {
        mark = 0;
        num--;
    }
    if (isNaN(mark1)) {
        mark1 = 0;
        num--;
    }
    if (isNaN(mark2)) {
        mark2 = 0;
        num--;
    }
    if (isNaN(mark3)) {
        mark3 = 0;
        num--;
    }

    var ave = (mark + mark1 + mark2 + mark3) / num * 100;
    document.getElementById("result").innerHTML = ave;
}

function ws() {
    var mark = Number(document.getElementById("t2").value / document.getElementById("t3").value);
    var mark1 = Number(document.getElementById("t12").value / document.getElementById("t13").value);
    var mark2 = Number(document.getElementById("t22").value / document.getElementById("t23").value);
    var mark3 = Number(document.getElementById("t32").value / document.getElementById("t33").value);
    var w = document.getElementById("t1").value;
    var w1 = document.getElementById("t11").value;
    var w2 = document.getElementById("t21").value;
    var w3 = document.getElementById("t31").value;

    if (isNaN(mark) || isNaN(w)) {
        w = 0;
        mark = 0;
    }
    if (isNaN(mark1) || isNaN(w1)) {
        w1 = 0;
        mark1 = 0;
    }
    if (isNaN(mark2) || isNaN(w2)) {
        w2 = 0;
        mark2 = 0;
    }
    if (isNaN(mark3) || isNaN(w3)) {
        mark3 = 0;
        mark3 = 0;
    }

    var sumWeights = (Number(w) + Number(w1) + Number(w2) + Number(w3));
    var weightedAve = ((w * mark + w1 * mark1 + w2 * mark2 + w3 * mark3) / sumWeights);
    document.getElementById("result").innerHTML = weightedAve * 100;


}

function gs() {

    var mark = Number(document.getElementById("t2").value / document.getElementById("t3").value);
    var mark1 = Number(document.getElementById("t12").value / document.getElementById("t13").value);
    var mark2 = Number(document.getElementById("t22").value / document.getElementById("t23").value);
    var mark3 = Number(document.getElementById("t32").value / document.getElementById("t33").value);
    var w = document.getElementById("t1").value;
    var w1 = document.getElementById("t11").value;
    var w2 = document.getElementById("t21").value;
    var w3 = document.getElementById("t31").value;

    if (isNaN(mark) || isNaN(w)) {
        w = 0;
        mark = 0;
    }
    if (isNaN(mark1) || isNaN(w1)) {
        w1 = 0;
        mark1 = 0;
    }
    if (isNaN(mark2) || isNaN(w2)) {
        w2 = 0;
        mark2 = 0;
    }
    if (isNaN(mark3) || isNaN(w3)) {
        mark3 = 0;
        mark3 = 0;
    }
    var sumWeights = (Number(w) + Number(w1) + Number(w2) + Number(w3));
    var weightedAve = ((w * mark + w1 * mark1 + w2 * mark2 + w3 * mark3) / sumWeights) * 100;
    var goalweight = document.getElementById("test1").value;
    var goalscore = document.getElementById("test2").value;

    console.log(goalweight);
    console.log(goalscore);
    var totalWeight = sumWeights + Number(goalweight);
    console.log(totalWeight);
    var weightFactor = goalweight / totalWeight;
    console.log(weightFactor);
    var gradeDiff = goalscore - weightedAve;
    console.log(gradeDiff);
    console.log(gradeDiff / weightFactor);
    var gradeNeeded = (gradeDiff / weightFactor) + weightedAve;
    console.log(gradeNeeded);
    document.getElementById("goalresult").innerHTML = gradeNeeded;


}