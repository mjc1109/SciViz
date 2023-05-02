function fun1(x, tauy, deltas_Case1, f, max_depth) {   
    const uex_windy_Case1 = 1.0*uex_windy(tauy, deltas_Case1, rhow, f, 1);
    const tzone2 = 7/5;
    var res = 1.0;

    if (x >= 0 && x < deltas_Case1/2) {
        res = 0;
    } else if (x >= deltas_Case1/2 && x < deltas_Case1*tzone2) {
        res = uex_windy_Case1/(deltas_Case1*tzone2 - deltas_Case1/2)*x - (deltas_Case1/2 * uex_windy_Case1)/(deltas_Case1*tzone2 - deltas_Case1/2)
    } else if (x >= deltas_Case1*tzone2 && x <= max_depth) {
        res = uex_windy_Case1
    }
    return res;
    //plot([0 deltas_Case1/2],0*[1 1],'c-','LineWidth',3,'Color',[0 1 1]*.9);
    //plot([deltas_Case1/2 deltas_Case1*tzone2],[0 uex_windy_Case1],'c:','LineWidth',3,'Color',[0 1 1]*.9);
    //plot([deltas_Case1*tzone2 120],uex_windy_Case1*[1 1],'c-','LineWidth',3,'Color',[0 1 1]*.9);
}

function fun2(x, taux, deltas_Case1, f, max_depth) {
    const tzone1 = 3/5; 
    const tzone2 = 7/5; // choose (arbitrary) fractional width of transition zones

    //FINISH IMPLEMENTING
    const uex_windx_Case1b = uex_windx(taux, deltas_Case1, rhow, f, 1.2);
    const wave_Case1 = new waveshoal(T_Case1, h0, Hs_Case1, theta0, gammabr);

    var res = 1.0;
    if (x >= 0 && x < wave_Case1.breaking_depth*2) {
        //dashed line
        res = uex_windx_Case1b;
    } else if (x >= wave_Case1.breaking_depth*2 && x < deltas_Case1*tzone1) {
        //now becomes solid
        res = uex_windx_Case1b;
    } else if (x >= deltas_Case1*tzone1 && x < deltas_Case1*tzone2) {
        //back to dashed
        res = (uex_windx_Case1a - uex_windx_Case1b)/(deltas_Case1*tzone2 - deltas_Case1*tzone1)*x + uex_windx_Case1b - (uex_windx_Case1a - uex_windx_Case1b)/(deltas_Case1*tzone2 - deltas_Case1*tzone1)*deltas_Case1
    } else if (x >= deltas_Case1*tzone2 && x <= max_depth) {
        res = uex_windx_Case1a;
    }

    return res

    // Cross-shore wind
    
    //plot([0 wave_Case1.breaking_depth*2],uex_windx_Case1b*[1 1],'b:','LineWidth',3);
    //plot([wave_Case1.breaking_depth*2 deltas_Case1*tzone1],uex_windx_Case1b*[1 1],'b-','LineWidth',3);
    //plot([deltas_Case1*tzone1 deltas_Case1*tzone2],[uex_windx_Case1b uex_windx_Case1a],'b:','LineWidth',3);
    //plot([deltas_Case1*tzone2 120],uex_windx_Case1a*[1 1],'b-','LineWidth',3);
}
