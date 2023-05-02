//define data arrays, one per equation
var data = [];

//helpful variable declarations
const tau_Case1 = 0.03; // wind stress N/m2
const deg_to_rad = Math.PI/180.0
const rhow = 1023; // water density (kg m3 /s)
const ustar_Case1 = Math.sqrt(tau_Case1/rhow);
const N_Case1 = 0.01; // 1/s, buoyance frequency

//set defaults
const tauy_default = tau_Case1/Math.sqrt(2); // wind stress N/m2
const f_default = 2*7.2921*10**(-5)*Math.sin(35 * deg_to_rad); // Coriolis freq at location of interest
const deltas_Case1_default = 1.5*ustar_Case1/Math.sqrt(N_Case1*f_default); // Stratified, M2023 Eq 3;
const max_depth_default = 120;
document.getElementById('tauy').value = tauy_default;
document.getElementById('deltas').value = deltas_Case1_default;
document.getElementById('f').value = f_default;
document.getElementById('max_depth').value = max_depth_default;

//define default parameter values
var max_depth = max_depth_default;
var tauy = tauy_default;
var deltas_Case1 = deltas_Case1_default;
var f = f_default;

//basically, begin with all param's equal to default values
for (let x = 0; x <= max_depth; x++) {
    //later on, we should make the equations be calculated with function calls
    data.push([x, fun1(x, tauy, deltas_Case1, f, max_depth)]);
}
