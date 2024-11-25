let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Radiation shield-tube and sphere</h5>
        <p>Learning Objective: Calculate percentage reduction in heat transfer rate and steady state temperature of the shield.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate steady state temperature of shield", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> A cryogenic fluid flows through a ${act1_d1}mm diameter tubewhich is concentric with a tube of ${act1_d2}mm diameter, surface emmisivities of inner and outer tube are ${act1_eps1} &amp; ${act1_eps2} while temperature are ${act1_t1}<sup>o</sup>K &amp; ${act1_t2}<sup>o</sup>K respectively. Find: </h5>
        <h5>1. Heat gained by the fluid if the length of the tube is ${act1_l}m.</h5>
        <h5>2. Percentage reduction in heat gained, if a radiation shield with diameter ${act1_d3}mm (emissivity is ${act1_eps3} for inner surface and ${act1_eps4} for outer surface) is introduced between the tubes.</h5>
        <h5>3. Steady state temperature attained by the shield.</h5>
        <br>
        <div class="row">
            <div class="col-6"> <p style='text-align: left;'><img style='width: 70%;' src='./images/activity1_1.png'></p> </div>
            <div class="col-6"> <p style='text-align: left;'><img style='width: 100%;' src='./images/activity1_2.png'></p> </div>
        </div>
        <br><br>

        <h5>Without shield</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 = \\pi D_1 L $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> m<sup>2</sup>

            <button class='btn btn-info std-btn' onclick='verify_act1_a1();' id='btn_act1_a1' style="width:20%">Verify</button>
        </p>

        <div id="act1_a2" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ A_2 = \\pi D_2 L $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span> m<sup>2</sup>

                <button class='btn btn-info std-btn' onclick='verify_act1_a2();' id='btn_act1_a2' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_qw" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ F_{12} = 1 $$
                    $$ Q_w = \\frac{\\sigma(T_1^4 - T_2^4)}{\\frac{1 - \\epsilon_1}{A_1 \\epsilon_1} + \\frac{1}{A_1 F_{12}} + \\frac{1 - \\epsilon_2}{A_2 \\epsilon_2}} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act1_qw();' id='btn_act1_qw' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_a3" style="display: none">
            <h5>With shield</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ A_3 = \\pi D_3 L $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> m<sup>2</sup>

                <button class='btn btn-info std-btn' onclick='verify_act1_a3();' id='btn_act1_a3' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_qs" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ F_{13} = 1 $$
                    $$ F_{42} = 1 $$
                    $$ A_4 = A_3 $$
                    $$ Q_s = \\frac{\\sigma (T_1^4 - T_2^4)}{\\frac{1 - \\epsilon_1}{A_1 \\epsilon_1} + \\frac{1}{A_1 F_{13}} + \\frac{1 - \\epsilon_3}{A_3 \\epsilon_3} + \\frac{1 - \\epsilon_4}{A_3 \\epsilon_4} + \\frac{1}{A_4 F_{42}} + \\frac{1 - \\epsilon_2}{A_2 \\epsilon_2}} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act1_qs();' id='btn_act1_qs' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_redc" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Percentage\\ Reduction\\ in\\ heat\\ gain = \\frac{Q_w - Q_s}{Q_w} * 100 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> %

                <button class='btn btn-info std-btn' onclick='verify_act1_redc();' id='btn_act1_redc' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_t3" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ F_{13} = 1 $$
                    $$ Q_s = \\frac{\\sigma (T_1^4 - T_1^4)}{\\frac{1 - \\epsilon_1}{A_1 \\epsilon_1} + \\frac{1}{A_1 F_{13}} + \\frac{1 - \\epsilon_3}{A_3 \\epsilon_3}} $$
                    $$ T_3 = (\\frac{-Q_s(\\frac{1 - \\epsilon_1}{A_1 \\epsilon_1} + \\frac{1}{A_1 F_{13}} + \\frac{1-\\epsilon_3}{A_3 \\epsilon_3})}{\\sigma} + T_1^4)^{1/4} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> <sup>o</sup>K

                <button class='btn btn-info std-btn' onclick='verify_act1_t3();' id='btn_act1_t3' style="width:20%">Verify</button>
            </p>
        </div>
    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    act1_a1 = Math.PI * act1_d1_val * act1_l;
    act1_a2 = Math.PI * act1_d2_val * act1_l;
    //act1_qw = (sigma*(act1_t1**4 - act1_t2**4))/(((1-act1_eps1)/(act1_a1*act1_eps1)) + (1/act1_a1*act1_f12) + ((1-act1_eps2)/(act1_a1*act1_eps2)));
    act1_a3 = Math.PI * act1_d3_val * act1_l;
    let r = (1 - act1_eps1) / (act1_a1 * act1_eps1) + 1 / act1_a1 + (1 - act1_eps2) / (act1_a2 * act1_eps2);
    act1_qw = sigma * (Math.pow(act1_t1, 4) - Math.pow(act1_t2, 4)) / r;
    let r1 = (1 - act1_eps1) / (act1_a1 * act1_eps1) + 1 / act1_a1 + (1 - act1_eps3) / (act1_a3 * act1_eps3) + (1 - act1_eps4) / (act1_a3 * act1_eps4) + 1 / act1_a3 + (1 - act1_eps2) / (act1_a2 * act1_eps2);
    act1_qs = sigma * (Math.pow(act1_t1, 4) - Math.pow(act1_t2, 4)) / r1;
    act1_redt_per = ((act1_qw - act1_qs) / act1_qw) * 100;
    r = (1 - act1_eps1) / (act1_a1 * act1_eps1) + 1 / act1_a1 + (1 - act1_eps3) / (act1_a3 * act1_eps3);
    act1_t3 = Math.pow((-act1_qs * r / sigma + Math.pow(act1_t1, 4)), 0.25);
    console.log("act1 r1= ", r1);
    console.log("act1 sigma= ", sigma);
    console.log("act1 A1= ", act1_a1);
    console.log("act1 A2= ", act1_a2);
    console.log("act1 Qw= ", act1_qw);
    console.log("act1 A3= ", act1_a3);
    console.log("act1 Qs= ", act1_qs);
    console.log("act1 radiation percentage= ", act1_redt_per);
    console.log("act1 Q= ", act1_q);
    console.log("act1 t3= ", act1_t3);
}
function verify_act1_a1() {
    let btn = document.getElementById('btn_act1_a1');
    let div = document.getElementById('act1_a2');
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(3)), parseFloat(act1_a1.toFixed(3)))) {
        alert('Area 1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act1_a1).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_a2() {
    let btn = document.getElementById('btn_act1_a2');
    let div = document.getElementById('act1_qw');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act1_a2.toFixed(2)))) {
        alert('Area 2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${(act1_a2).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_qw() {
    let btn = document.getElementById('btn_act1_qw');
    let div = document.getElementById('act1_a3');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(3)), parseFloat(act1_qw.toFixed(3)))) {
        alert('Qw value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp3.remove();
    sp3.innerText = `${(act1_qw).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_a3() {
    let btn = document.getElementById('btn_act1_a3');
    let div = document.getElementById('act1_qs');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(3)), parseFloat(act1_a3.toFixed(3)))) {
        alert('A3 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp4.remove();
    sp4.innerText = `${(act1_a3).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_qs() {
    let btn = document.getElementById('btn_act1_qs');
    let div = document.getElementById('act1_redc');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(3)), parseFloat(act1_qs.toFixed(3)))) {
        alert('Qs value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp5.remove();
    sp5.innerText = `${(act1_qs).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_redc() {
    let btn = document.getElementById('btn_act1_redc');
    let div = document.getElementById('act1_t3');
    let inp6 = document.getElementById('cal06-inp');
    let sp6 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(3)), parseFloat(act1_redt_per.toFixed(3)))) {
        alert('Reduction percentage is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp6.remove();
    sp6.innerText = `${(act1_redt_per).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_t3() {
    let btn = document.getElementById('btn_act1_t3');
    let inp7 = document.getElementById('cal07-inp');
    let sp7 = document.getElementById('cal07-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(3)), parseFloat(act1_t3.toFixed(3)))) {
        alert('Shield Temperature value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp7.remove();
    sp7.innerText = `${(act1_t3).toFixed(3)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map