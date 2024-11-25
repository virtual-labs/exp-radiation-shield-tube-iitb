function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate heat flow due to reduction. </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3'>Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate heat flow due to reduction", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Liquid oxygen at temperature ${act2_t1}<sup>o</sup>C is stored in a spherical vessel having outer diameter of ${act2_d1}m. The system is insulated by enclosing the container inside another concentric sphere having inner diameter of ${act2_d2}m with space between them evacuated. Both the sphere are having emissivity ${act2_eps1_w}. The temperature of outer sphere is ${act2_t2}<sup>o</sup>C.  </h5>
        <h5>Calculate heat flow due to radiation.</h5>
        <h5>What will be the reduction in heat flow if polished aluminium with an emissivity of ${act2_eps1_s} is used for the container walls. </h5>
        <br><br>
        <h5>Without shield</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 = \\pi D_1^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> m<sup>2</sup>

            <button class='btn btn-info std-btn' onclick='verify_act2_a1();' id='btn_act2_a1' style="width:20%">Verify</button>
        </p>

        <div id="act2_a2" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ A_2 = \\pi D_2^2 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> m<sup>2</sup>

                <button class='btn btn-info std-btn' onclick='verify_act2_a2();' id='btn_act2_a2' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_qw" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ \\epsilon_1 = \\epsilon_2 = 0.3 $$
                    $$ F_{12} = 1 $$
                    $$ Q_w = \\frac{\\sigma(T_1^4 - T_2^4)}{\\frac{1 - \\epsilon_1}{A_1 \\epsilon_1} + \\frac{1}{A_1 F_{12}} + \\frac{1 - \\epsilon_2}{A_2 \\epsilon_2}} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act2_qw();' id='btn_act2_qw' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_qs" style="display: none">
            <h5>With shield</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ with\\ emissivity\\ \\epsilon\\ =\\ 0.05  $$
                    $$ Q_s = \\frac{\\sigma(T_1^4 - T_2^4)}{\\frac{1 - \\epsilon_1}{A_1 \\epsilon_1} + \\frac{1}{A_1 F_{12}} + \\frac{1 - \\epsilon_2}{A_2 \\epsilon_2}} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act2_qs();' id='btn_act2_qs' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_redc" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Percentage\\ Reduction\\ in\\ heat\\ flow = \\frac{Q_w - Q_s}{Q_w} * 100 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span> %

                <button class='btn btn-info std-btn' onclick='verify_act2_redc();' id='btn_act2_redc' style="width:20%">Verify</button>
            </p>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    act2_a1 = Math.PI * Math.pow(act2_d1, 2);
    act2_a2 = Math.PI * Math.pow(act2_d2, 2);
    let qwnum = sigma * (Math.pow(act2_t1_val, 4) - Math.pow(act2_t2_val, 4));
    let qwdem = ((1 - act2_eps1_w) / (act2_a1 * act2_eps1_w)) + (1 / (act2_a1 * act2_f12)) + ((1 - act2_eps2_w) / (act2_a2 * act2_eps2_w));
    act2_qw = qwnum / qwdem;
    let qsdem = ((1 - act2_eps1_s) / (act2_a1 * act2_eps1_s)) + (1 / (act2_a1 * act2_f12)) + ((1 - act2_eps2_w) / (act2_a2 * act2_eps2_w));
    act2_qs = qwnum / qsdem;
    act2_redt_per = ((act2_qw - act2_qs) / act2_qw) * 100;
    console.log(qwnum);
    console.log(qwdem);
    console.log("Act2 A1= ", act2_a1);
    console.log("Act2 A2= ", act2_a2);
    console.log("Act2 Qw= ", act2_qw);
    console.log("Act2 Qs= ", act2_qs);
    console.log("Act2 Radiation %= ", act2_redt_per);
}
function verify_act2_a1() {
    let btn = document.getElementById('btn_act2_a1');
    let div = document.getElementById('act2_a2');
    let inp8 = document.getElementById('cal08-inp');
    let sp8 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(3)), parseFloat(act2_a1.toFixed(3)))) {
        alert('Area 1 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp8.remove();
    sp8.innerText = `${(act2_a1).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_a2() {
    let btn = document.getElementById('btn_act2_a2');
    let div = document.getElementById('act2_qw');
    let inp9 = document.getElementById('cal09-inp');
    let sp9 = document.getElementById('cal09-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(2)), parseFloat(act2_a2.toFixed(2)))) {
        alert('Area 2 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp9.remove();
    sp9.innerText = `${(act2_a2).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_qw() {
    let btn = document.getElementById('btn_act2_qw');
    let div = document.getElementById('act2_qs');
    let inp10 = document.getElementById('cal10-inp');
    let sp10 = document.getElementById('cal10-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(3)), parseFloat(act2_qw.toFixed(3)))) {
        alert('Qw value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp10.remove();
    sp10.innerText = `${(act2_qw).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_qs() {
    let btn = document.getElementById('btn_act2_qs');
    let div = document.getElementById('act2_redc');
    let inp11 = document.getElementById('cal11-inp');
    let sp11 = document.getElementById('cal11-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp11.value).toFixed(3)), parseFloat(act2_qs.toFixed(3)))) {
        alert('Qs value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp11.remove();
    sp11.innerText = `${(act2_qs).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_redc() {
    let btn = document.getElementById('btn_act2_redc');
    let inp12 = document.getElementById('cal12-inp');
    let sp12 = document.getElementById('cal12-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp12.value).toFixed(3)), parseFloat(act2_redt_per.toFixed(3)))) {
        alert('Reduction percentage is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp12.remove();
    sp12.innerText = `${(act2_redt_per).toFixed(3)}`;
    exp_complete();
}
function exp_complete() {
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map