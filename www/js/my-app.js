// Initialize app
var myApp = new Framework7({
    lazy: {
        threshold: 50,
        sequential: false,
    },
});

var objectProductos = [{
    codigo: 10000016,
    id: 1,
    descripcion: '	BAYETILLA ROJA Y/O TARTAN 70 X 100 CM	 ',
    valor: 39440
},
    {codigo: 10000041, id: 2, descripcion: '	DETERGENTE (AS) EN POLVO DERSA X 1000GR	 ', valor: 46240},
    {codigo: 10000043, id: 3, descripcion: '	LIMPIADOR DESINFEC AJAX FRES-LIMON 1000M	 ', valor: 85360},
    {codigo: 10000063, id: 4, descripcion: '	LIMPIADOR FROTEX CREMA X 550 GRS	 ', valor: 98384},
    {codigo: 10000068, id: 5, descripcion: '	ESPONJILLA LA MAQUINA P/TRABAJO PESADO	 ', valor: 16360},
    {codigo: 10000069, id: 6, descripcion: '	BALDE PLASTICO 10LT COLOR SURTIDO	 ', valor: 40160},
    {codigo: 10000079, id: 7, descripcion: '	JABON ESPUMA P/MANOS X 1000CC FAMILIA REF.80530	 ', valor: 246240},
    {codigo: 10000082, id: 8, descripcion: '	LIMPIADOR P/ALFOMBRAS POLVO PIF-PAF 400G	 ', valor: 121024},
    {codigo: 10000083, id: 9, descripcion: '	DETERGENTE EN POLVO FAB FLORAL X 850 GR	 ', valor: 69120},
    {codigo: 10000104, id: 10, descripcion: '	PAÑO ABSORBENTE REGULAR SCOTCH BRITE UND	 ', valor: 27552},
    {codigo: 10000110, id: 11, descripcion: '	ESPONJILLA DOBLE USO P/COCINA 10X9CM UND	 ', valor: 9216},
    {codigo: 10000138, id: 12, descripcion: '	LUSTRAMUEBLES 3 EN 1 MANSION X 200CC LAV	 ', valor: 60960},
    {codigo: 10000147, id: 13, descripcion: '	CHURRUSCO P/SANITARIO M/PLASTICO C/BASE	 ', valor: 33160},
    {codigo: 10000157, id: 14, descripcion: '	CEPILLO P/UÑAS MANGO (PLASTICO) IMUSA	 ', valor: 22400},
    {codigo: 10000184, id: 15, descripcion: '	TRAPERO MECHA ALGODON REPUESTO 500GR	 ', valor: 108000},
    {codigo: 10000238, id: 16, descripcion: '	MANGO MADERA C/ROSCA Y TAPON 126 CMS 1A	 ', valor: 14160},
    {codigo: 10000280, id: 17, descripcion: '	BAYETILLA BLANCA 50CM X 70CM	 ', valor: 21120},
    {codigo: 10000322, id: 18, descripcion: '	BLANQUEADOR BLANCOX 3800CC AL 5.25% NATU	 ', valor: 46176},
    {codigo: 10000374, id: 19, descripcion: '	LIMPIADOR DESINFECTANTE INHIBACTER X20LT	 ', valor: 368800},
    {codigo: 10000385, id: 20, descripcion: '	ESCOBA DURA IMPERIAL AZUL REPUESTO	 ', valor: 44560},
    {codigo: 10000442, id: 21, descripcion: '	GUANTES CAUCHO ROSADO PAR TALL 9  CAL.20	 ', valor: 33440},
    {codigo: 10000481, id: 22, descripcion: '	DESINFECTANTE DESINFEX AEROSOL X 300MM	 ', valor: 71040},
    {codigo: 10000502, id: 23, descripcion: '	TRAPERO COPA ALGODON REPUESTO  430GR	 ', valor: 39320},
    {codigo: 10000527, id: 24, descripcion: '	TRAPERO COPA ALGODON 430G CABO MADE 140C	 ', valor: 58480},
    {codigo: 10000550, id: 25, descripcion: '	BALDE PLASTICO 13LT BLANCO IMUSA	 ', valor: 102080},
    {codigo: 10000558, id: 26, descripcion: '	RECOGEDOR PLAST.AZUL C/BANDA MANGO PVC	 ', valor: 20640},
    {codigo: 10000572, id: 27, descripcion: '	HARAGAN METALICO 60X150CM	 ', valor: 245600},
    {codigo: 10000596, id: 28, descripcion: '	GUANTE PAR AMARILLO C.20 TALLA 8 ETERNA	 ', valor: 30200},
    {codigo: 10000597, id: 29, descripcion: '	ESPONJILLA TRABAJO PESADO 10X14CM UND	 ', valor: 23800},
    {
        codigo: 10000605,
        id: 30,
        descripcion: '	GEL SANITIZANTE ZANIGEL X1000CC REPUESTO REF.80091	 ',
        valor: 195936
    },
    {codigo: 10000640, id: 31, descripcion: '	TRAPERO COPA ALGODON 350GR CABO MAD 140C	 ', valor: 57080},
    {codigo: 10000660, id: 32, descripcion: '	RECOGEDOR PLASTICO NEGRO SIN CABO MELODY	 ', valor: 28080},
    {codigo: 10000670, id: 33, descripcion: '	PURIFICADOR ADHESIVO P/TANQUE X3 SURTIDO	 ', valor: 37440},
    {codigo: 10000682, id: 34, descripcion: '	JABON LIQUIDO P/MANOS SUAVE X 1000 CC REF.80500	 ', valor: 150320},
    {codigo: 10000728, id: 35, descripcion: '	LIMPION MULTIUSOS MICROFIBRA SURT 40X40C	 ', valor: 23840},
    {codigo: 10000768, id: 36, descripcion: '	ESCOBA DURA REINA SURT.CABO MADERA 140CM	 ', valor: 39760},
    {codigo: 10000771, id: 37, descripcion: '	ESCOBA SUAVE MEGA REINA REPUESTO	 ', valor: 39120},
    {codigo: 10000772, id: 38, descripcion: '	ESCOBA SUAVE REINA SURT.CABO MADERA 140C	 ', valor: 39800},
    {codigo: 10000802, id: 39, descripcion: '	PAÑO FAMITEX SALMON 33X61 PAQX10 UND REF.74322	 ', valor: 74840},
    {codigo: 10000880, id: 40, descripcion: '	LIMPION MULTIUSOS MICROFIBRA AZUL 40X40C	 ', valor: 23840},
    {codigo: 10000924, id: 41, descripcion: '	RECOGEDOR PLASTICO VERDE C/BANDA CABO PV	 ', valor: 20800},
    {codigo: 10001240, id: 42, descripcion: '	ESPONJILLA DOBLE USO (FIBRA/ESPONJA)UND.	 ', valor: 4016},
    {codigo: 10001243, id: 43, descripcion: '	LIMPIAVIDRIOS ORION GALON X 3750CC	 ', valor: 58040},
    {codigo: 10001258, id: 44, descripcion: '	LIMPIADOR DESINFECTANTE GALON X 3000 CC	 ', valor: 77200},
    {codigo: 10001265, id: 45, descripcion: '	JABON LIQUIDO LAVALOZA GALON X 3750 CC	 ', valor: 206000},
    {codigo: 10001274, id: 46, descripcion: '	LIMPIADOR DESINFECTANTE INHIBACTER X3800	 ', valor: 94000},
    {codigo: 10001277, id: 47, descripcion: '	FIBRA LIMPIADORA ABRASIVA VERDE EL REY	 ', valor: 1720},
    {codigo: 10001295, id: 48, descripcion: '	GUANTES DOMESTICOS AMARILLO 9 PAR CAL.25	 ', valor: 29280},
    {codigo: 10001333, id: 49, descripcion: '	LIMPIAVIDRIOS PROAMERICA X 3000 CC	 ', valor: 65200},
    {codigo: 10001334, id: 50, descripcion: '	BLANQUEADOR ORION X 3750CC AL 5.25%	 ', valor: 50400},
    {codigo: 10001335, id: 51, descripcion: '	ESPONJA MULTIUSOS ANATOMICA DORADA-PLATA	 ', valor: 16664},
    {codigo: 10001336, id: 52, descripcion: '	JABON LIQUIDO LAVALOZA SUMA DISH X 5 LT	 ', valor: 604960},
    {codigo: 10001399, id: 53, descripcion: '	ESCOBA SUAVE T/ZULIA AMARILLA REPUESTO	 ', valor: 25080},
    {codigo: 10001426, id: 54, descripcion: '	LIMPION MULTIUSOS MICROFIBRA BLANCO40X40	 ', valor: 23888},
    {codigo: 10001546, id: 55, descripcion: '	CEPILLO DURO TIPO PLANCHA FIBRA AZUL	 ', valor: 14400},
    {codigo: 10001650, id: 56, descripcion: '	BLANQUEADOR ORION X 3750CC AL 8%	 ', valor: 70800},
    {codigo: 20000002, id: 57, descripcion: '	PAPEL ALUMINIO 30CM X 15M ROLLO EN CAJA	 ', valor: 52240},
    {codigo: 20000105, id: 58, descripcion: '	TENEDOR PLASTICO PEQUEÑO BLANCO X 100UND	 ', valor: 17600},
    {codigo: 70000024, id: 59, descripcion: '	GUANTE INDUSTRIAL PAR NEGRO C25 8-8.1/2	 ', valor: 26520},
    {codigo: 70000026, id: 60, descripcion: '	GUANTE INDUSTRIAL PAR NEGRO C35 8-8.1/2	 ', valor: 32496},
    {codigo: 70000029, id: 61, descripcion: '	GUANTES BICOLOR CAL 35 NEG/VER T.8	 ', valor: 38560},
    {codigo: 70000090, id: 62, descripcion: '	GUANTES INDUSTRIALES NEGRO 8 PAR CAL.25	 ', valor: 38560},
    {codigo: 70000091, id: 63, descripcion: '	GUANTES INDUSTRIALES NEGRO 9 PAR CAL.25	 ', valor: 38560},
    {codigo: 70000296, id: 64, descripcion: '	GUANTE FLEX NYLON-NITRILO NEGRO PAR T.8	 ', valor: 67360},
    {codigo: 70001185, id: 65, descripcion: '	GUANTE INDUSTRIAL PAR NEGRO C35 T.9	 ', valor: 32720},
    {codigo: 70002222, id: 66, descripcion: '	GUANTE PLASTICO P/MANEJO ALIM.PAQX50 PAR	 ', valor: 18080},
    {codigo: 120000450, id: 67, descripcion: '	LIMPIADOR P/TABLERO ACRILICO X120 CC	 ', valor: 47040},
    {codigo: 220000030, id: 68, descripcion: '	BALDE 12 LITROS BLANCO  Mr.FABRUSH 	 ', valor: 14220},
    {codigo: 230000060, id: 69, descripcion: '	BOLSA PLAST.NEGRA 70X100CM PAQX6	 ', valor: 29080},
    {codigo: 230000082, id: 70, descripcion: '	BOLSA PLAST.BLANCA 70X100CM PAQX6	 ', valor: 24040},
    {codigo: 230000105, id: 71, descripcion: '	BOLSA PLAST.NEGRA 45X60CM PAQX6	 ', valor: 5584},
    {codigo: 230000135, id: 72, descripcion: '	BOLSA PLAST.NEGRA 60X90CM PAQX6	 ', valor: 14920},
    {codigo: 230000172, id: 73, descripcion: '	BOLSA PLAST.NEGRA 90X130CM BULTO X100UND	 ', valor: 568400},
    {codigo: 230000204, id: 74, descripcion: '	BOLSA PLAST.AZUL 70X100CM PAQX6	 ', valor: 2516},
    {codigo: 230000206, id: 75, descripcion: '	BOLSA PLAST.GRIS 70X100CM PAQX6	 ', valor: 2516},
    {codigo: 230000208, id: 76, descripcion: '	BOLSA PLAST.VERDE 70X100CM PAQX6	 ', valor: 2516},
    {codigo: 230000216, id: 77, descripcion: '	BOLSA PLAST.NEGRA 70X100CM PAQX6	 ', valor: 19504},
    {codigo: 230000278, id: 78, descripcion: '	BOLSA PLAST.BLANCA 35X60CM PAQX10	 ', valor: 6376},
    {codigo: 230000294, id: 79, descripcion: '	BOLSA PLAST.NEGRA 100X150CM PAQX6	 ', valor: 53600},
    {codigo: 230000333, id: 80, descripcion: '	BOLSA PLAST.NEGRA BIODEG. 60X90CM PAQX6	 ', valor: 12120},
    {codigo: 230000335, id: 81, descripcion: '	BOLSA PLAST.BLANCA BIODEG.60X90CM PAQX6U	 ', valor: 13480},
    {codigo: 230000339, id: 82, descripcion: '	BOLSA PLAST.AZUL BIOD. 40X60CM PAQX6	 ', valor: 5848},
    {codigo: 230000341, id: 83, descripcion: '	BOLSA PLAST.GRIS BIODEG.40X60CM PAQX6UN	 ', valor: 5848},
    {codigo: 230000343, id: 84, descripcion: '	BOLSA PLAST.VERDE BIODEG.40X60CM PAQX6UN	 ', valor: 5856},
    {codigo: 230000344, id: 85, descripcion: '	BOLSA PLAST.NEGRA BIODEG.40X60CM PAQX6UN	 ', valor: 5304},
    {codigo: 1, id: 86, descripcion: '	GLOWSTEN, LIMPIADOR CONCENTRADOTambor  x  200 Lts	 ', valor: 2324521},
    {codigo: 2, id: 87, descripcion: '	GLOWSTEN, LIMPIADOR CONCENTRADOCuñete   x   5 Gls.	 ', valor: 255589},
    {codigo: 3, id: 88, descripcion: '	GLOWSTEN, LIMPIADOR CONCENTRADOCaja x 4 Garrafas	 ', valor: 175279},
    {codigo: 4, id: 89, descripcion: '	GLOWSTEN, LIMPIADOR CONCENTRADOCaja x 12 Litros	 ', valor: 19848},
    {codigo: 5, id: 90, descripcion: '	GLOWSTEN, LIMPIADOR DESINFECTANTECuñete   x   5 Gls.	 ', valor: 211227},
    {codigo: 6, id: 91, descripcion: '	GLOWSTEN, LIMPIADOR DESINFECTANTECaja x 4 Garrafas	 ', valor: 148637},
    {codigo: 13, id: 92, descripcion: '	GLOWSTEN, REMOVEDORCuñete   x   5 Gls.	 ', valor: 224357},
    {codigo: 14, id: 93, descripcion: '	GLOWSTEN, REMOVEDORCaja x 4 Garrafas	 ', valor: 151951},
    {codigo: 15, id: 94, descripcion: '	GLOWSTEN, REMOVEDORCaja x 12 Litros	 ', valor: 169352},
    {codigo: 16, id: 95, descripcion: '	GLOWSTEN, DESENGRASANTE INDUSTRIALCuñete   x   5 Gls.	 ', valor: 269229},
    {codigo: 17, id: 96, descripcion: '	GLOWSTEN, DESENGRASANTE INDUSTRIALCaja x 4 Garrafas	 ', valor: 181334},
    {codigo: 18, id: 97, descripcion: '	GLOWSTEN, DESENGRASANTE INDUSTRIALCaja x 12 Litros	 ', valor: 201093},
    {codigo: 19, id: 98, descripcion: '	GLOWSTEN, MAGIKCuñete   x   5 Gls.	 ', valor: 175662},
    {codigo: 20, id: 99, descripcion: '	GLOWSTEN, MAGIKCaja x 4 Garrafas	 ', valor: 121612},
    {codigo: 21, id: 100, descripcion: '	GLOWSTEN, MAGIKCaja x 12 Litros	 ', valor: 138439},
    {codigo: 22, id: 101, descripcion: '	GLOWSTEN, MAGIK PADPad para Máquina de 17"	 ', valor: 92206},
    {codigo: 23, id: 102, descripcion: '	GLOWSTEN, MAGIK PADPad para Máquina de 20"	 ', valor: 96749},
    {codigo: 24, id: 103, descripcion: '	GLOWSTEN, MAGIK PAD PARA RINCONEROUnidad	 ', valor: 14876},
    {codigo: 25, id: 104, descripcion: '	GLOWSTEN, MAGIK ESPONJILLA6.8 cm x 12.2  x 4 cm	 ', valor: 6811},
    {codigo: 26, id: 105, descripcion: '	GLOWSTEN, BIANCOPote x 1 Kilo	 ', valor: 20906},
    {codigo: 43, id: 106, descripcion: '	GLOWSTEN, LIMPIA-BRILLADORCuñete   x   5 Gls.	 ', valor: 236978},
    {codigo: 44, id: 107, descripcion: '	GLOWSTEN, LIMPIA-BRILLADORCaja x 4 Garrafas	 ', valor: 16011},
    {codigo: 45, id: 108, descripcion: '	GLOWSTEN, LIMPIA-BRILLADORCaja x 12 Litros	 ', valor: 173622},
    {codigo: 46, id: 109, descripcion: '	GLOWSTEN, CERA AUTOBRILLANTE ROJACuñete   x   5 Gls.	 ', valor: 30932},
    {codigo: 47, id: 110, descripcion: '	GLOWSTEN, CERA AUTOBRILLANTE ROJACaja x 4 Garrafas	 ', valor: 207658},
    {codigo: 48, id: 111, descripcion: '	GLOWSTEN, CERA AUTOBRILLANTE ROJACaja x 12 Litros	 ', valor: 227799},
    {codigo: 49, id: 112, descripcion: '	GLOWSTEN, CERA MADERACaja x 4 Garrafas	 ', valor: 160878},
    {codigo: 50, id: 113, descripcion: '	GLOWSTEN, CERA MADERACaja x 4 Garrafas	 ', valor: 160878},
    {codigo: 51, id: 114, descripcion: '	GLOWSTEN, CERA MADERACaja x 4 Garrafas	 ', valor: 160878},
    {codigo: 55, id: 115, descripcion: '	GLOWSTEN, PAD DIAMANTADOSPad de 17"	 ', valor: 191701},
    {codigo: 56, id: 116, descripcion: '	GLOWSTEN, PAD DIAMANTADOSPad de 20"	 ', valor: 255777},
    {codigo: 57, id: 117, descripcion: '	GLOWSTEN, TELAS DIAMANTADASFlexibles	 ', valor: 47526},
    {codigo: 58, id: 118, descripcion: '	GLOWSTEN, AVANTICuñete   x   5 Gls.	 ', valor: 62256},
    {codigo: 59, id: 119, descripcion: '	GLOWSTEN, AVANTICaja x 4 Garrafas	 ', valor: 53329},
    {codigo: 60, id: 120, descripcion: '	GLOWSTEN, AVANTICaja x 12 Litros	 ', valor: 74002},
    {codigo: 61, id: 121, descripcion: '	GLOWSTEN, LANA DE ACERORollo x 2.5 Kgs.	 ', valor: 100852},
    {codigo: 62, id: 122, descripcion: '	GLOWSTEN, PAD GRIS PARA MAQUINA DE 17"Unidad	 ', valor: 19258},
    {codigo: 63, id: 123, descripcion: '	GLOWSTEN, PAD GRIS PARA MAQUINA DE 20"Unidad	 ', valor: 27676},
    {codigo: 64, id: 124, descripcion: '	GLOWSTEN, PPB "Polvo Para Brillar"Kilo	 ', valor: 55816},
    {codigo: 65, id: 125, descripcion: '	GLOWSTEN, CRISTALIZADOR 100 PLUSCuñete   x   5 Gls.	 ', valor: 418498},
    {codigo: 66, id: 126, descripcion: '	GLOWSTEN, CRISTALIZADOR 100 PLUSGarrafa	 ', valor: 6653},
    {codigo: 67, id: 127, descripcion: '	GLOWSTEN, CRISTALIZADOR 100 PLUSLitro	 ', valor: 22535},
    {codigo: 68, id: 128, descripcion: '	GLOWSTEN, CRISTALIZADOR 200 PLUSCuñete   x   5 Gls.	 ', valor: 578912},
    {codigo: 69, id: 129, descripcion: '	GLOWSTEN, CRISTALIZADOR 200 PLUSGarrafa	 ', valor: 92504},
    {codigo: 70, id: 130, descripcion: '	GLOWSTEN, CRISTALIZADOR 200 PLUSLitro	 ', valor: 34252},
    {codigo: 71, id: 131, descripcion: '	GLOWSTEN, CRISTALIZADOR 300Cuñete   x   5 Gls.	 ', valor: 560787},
    {codigo: 72, id: 132, descripcion: '	GLOWSTEN, CRISTALIZADOR 300Garrafa	 ', valor: 90061},
    {codigo: 73, id: 133, descripcion: '	GLOWSTEN, CRISTALIZADOR 300Litro	 ', valor: 32475},
    {codigo: 74, id: 134, descripcion: '	GLOWSTEN, CRISTALIZADOR UNOCuñete   x   5 Gls.	 ', valor: 1104159},
    {codigo: 75, id: 135, descripcion: '	GLOWSTEN, CRISTALIZADOR UNOGarrafa	 ', valor: 175737},
    {codigo: 76, id: 136, descripcion: '	GLOWSTEN, CRISTALIZADOR UNOLitro	 ', valor: 59684},
    {codigo: 77, id: 137, descripcion: '	GLOWSTEN, MILENIUMCuñete   x   5 Gls.	 ', valor: 264576},
    {codigo: 78, id: 138, descripcion: '	GLOWSTEN, MILENIUMCaja x 4 Garrafas	 ', valor: 189875},
    {codigo: 79, id: 139, descripcion: '	GLOWSTEN, MILENIUMCaja x 12 Litros	 ', valor: 220023},
    {codigo: 80, id: 140, descripcion: '	GLOWSTEN, LUCIDOXPote	 ', valor: 8595},
    {codigo: 87, id: 141, descripcion: '	GLOWSTEN, PPB GRANITO NATURALKilo	 ', valor: 91786},
    {codigo: 88, id: 142, descripcion: '	GLOWSTEN, DESMANCHADOR ALFOMBRASCuñete   x   5 Gls.	 ', valor: 458785},
    {codigo: 89, id: 143, descripcion: '	GLOWSTEN, DESMANCHADOR ALFOMBRASCaja x 4 Garrafas	 ', valor: 298293},
    {codigo: 90, id: 144, descripcion: '	GLOWSTEN, DESMANCHADOR ALFOMBRASCaja x 12 Litros	 ', valor: 314865},
    {codigo: 91, id: 145, descripcion: '	GLOWSTEN, SHAMPOO ALFOMBRASCuñete   x   5 Gls.	 ', valor: 210526},
    {codigo: 92, id: 146, descripcion: '	GLOWSTEN, SHAMPOO ALFOMBRASCaja x 4 Garrafas	 ', valor: 143665},
    {codigo: 93, id: 147, descripcion: '	GLOWSTEN, SHAMPOO ALFOMBRASCaja x 12 Litros	 ', valor: 161384},
    {codigo: 94, id: 148, descripcion: '	GLOWSTEN, BONNET BUFFINGCuñete   x   5 Gls.	 ', valor: 203196},
    {codigo: 95, id: 149, descripcion: '	GLOWSTEN, BONNET BUFFINGCaja x 4 Garrafas	 ', valor: 139586},
    {codigo: 96, id: 150, descripcion: '	GLOWSTEN, BONNET BUFFINGCaja x 12 Litros	 ', valor: 155393},
    {codigo: 97, id: 151, descripcion: '	GLOWSTEN, PAD BONNET 17"Unidad	 ', valor: 87694},
    {codigo: 98, id: 152, descripcion: '	GLOWSTEN, PAD BONNET 20"Unidad	 ', valor: 10133},
    {codigo: 99, id: 153, descripcion: '	GLOWSTEN, MULTILUSTRADORCaja x 12 Fcos	 ', valor: 131109},
    {codigo: 100, id: 154, descripcion: '	GLOWSTEN, DESMANCHADOR PARA BAÑOSCuñete   x   5 Gls.	 ', valor: 190959},
    {codigo: 101, id: 155, descripcion: '	GLOWSTEN, DESMANCHADOR PARA BAÑOSCaja x 4 Garrafas	 ', valor: 133212},
    {codigo: 102, id: 156, descripcion: '	GLOWSTEN, DESMANCHADOR PARA BAÑOSCaja x 12 Lts	 ', valor: 15125},
    {codigo: 103, id: 157, descripcion: '	GLOWSTEN, GERMICIDA CUATERNARIOCuñete   x   5 Gls.	 ', valor: 249598},
    {codigo: 104, id: 158, descripcion: '	GLOWSTEN, GERMICIDA CUATERNARIOCaja x 4 Garrafas	 ', valor: 171901},
    {codigo: 105, id: 159, descripcion: '	GLOWSTEN, GERMICIDA CUATERNARIOCaja x 12 Lts	 ', valor: 196313},
    {codigo: 106, id: 160, descripcion: '	GLOWSTEN, LIMPIA VIDRIOSCuñete   x   5 Gls.	 ', valor: 99112},
    {codigo: 107, id: 161, descripcion: '	GLOWSTEN, LIMPIA VIDRIOSCaja x 4 Garrafas	 ', valor: 72661},
    {codigo: 108, id: 162, descripcion: '	GLOWSTEN, LIMPIA VIDRIOSCaja x 12 Lts	 ', valor: 8713},
    {codigo: 109, id: 163, descripcion: '	GLOWSTEN, BRILLA-METAL MCuñete   x   5 Gls.	 ', valor: 397215},
    {codigo: 110, id: 164, descripcion: '	GLOWSTEN, BRILLA-METAL MCaja x 4 Garrafas	 ', valor: 264066},
    {codigo: 111, id: 165, descripcion: '	GLOWSTEN, BRILLA-METAL MCaja x 12 Lts	 ', valor: 281976},
    {codigo: 112, id: 166, descripcion: '	GLOWSTEN, HIPOCLORCuñete   x   5 Gls.	 ', valor: 62292},
    {codigo: 127, id: 167, descripcion: '	GLOWSTEN, CREMA RESTAURADORALitro	 ', valor: 50512},
    {codigo: 128, id: 168, descripcion: '	GLOWSTEN, CREMA RESTAURADORAPote x 500 cc	 ', valor: 26094},
    {
        codigo: 129,
        id: 169,
        descripcion: '	GLOWSTEN, DISPENSADOR JABON PARA MANOS X 1000 Bolsa Espuma	 ',
        valor: 72384
    },
    {codigo: 130, id: 170, descripcion: '	GLOWSTEN, DISPENSADOR JABON PARA MANOS X 1200Unidad	 ', valor: 57946},
    {codigo: 131, id: 171, descripcion: '	GLOWSTEN, DISPENSADOR JABON PARA MANOS C 350Unidad	 ', valor: 59019},
    {
        codigo: 132,
        id: 172,
        descripcion: '	GLOWSTEN, RESPUESTO DISPENSADOR JABON MANOS X 1000Unidad	 ',
        valor: 12376
    },
    {codigo: 135, id: 173, descripcion: '	GLOWSTEN, NARANJELLOPote x 1 Kilo	 ', valor: 20906},
    {codigo: 136, id: 174, descripcion: '	GLOWSTEN, BLANQUEADORCuñete   x   5 Gls.	 ', valor: 62292},
    {codigo: 137, id: 175, descripcion: '	GLOWSTEN, DESINCRUSTANTECuñete   x   5 Gls.	 ', valor: 138069},
    {codigo: 138, id: 176, descripcion: '	GLOWSTEN, DESINCRUSTANTECaja x 4 Garrafas	 ', valor: 96594},
    {codigo: 139, id: 177, descripcion: '	GLOWSTEN, DESINFECTANTECuñete   x   5 Gls.	 ', valor: 136782},
    {codigo: 140, id: 178, descripcion: '	GLOWSTEN, DESINFECTANTECaja x 4 Garrafas	 ', valor: 97137},
    {codigo: 141, id: 179, descripcion: '	GLOWSTEN, ATOMIZADORESINDUSTRIAL	 ', valor: 6143},
    {codigo: 142, id: 180, descripcion: '	GLOWSTEN, ATOMIZADORESINSTITUCIONAL	 ', valor: 5274},
    {codigo: 143, id: 181, descripcion: '	GLOWSTEN, ATOMIZADORESGATILLO INDUSTRIAL	 ', valor: 4245},
    {codigo: 144, id: 182, descripcion: '	GLOWSTEN, ATOMIZADORESFOAM	 ', valor: 671},
    {codigo: 145, id: 183, descripcion: '	GLOWSTEN, PAD NEGRO PARA MAQUINA DE 17"Unidad	 ', valor: 19258},
    {codigo: 146, id: 184, descripcion: '	GLOWSTEN, PAD NEGRO PARA MAQUINA DE 20"Unidad	 ', valor: 27676},
    {codigo: 147, id: 185, descripcion: '	GLOWSTEN, PAD CAFÉ PARA MAQUINA DE 17"Unidad	 ', valor: 19258},
    {codigo: 148, id: 186, descripcion: '	GLOWSTEN, PAD CAFÉ PARA MAQUINA DE 20"Unidad	 ', valor: 27676},
    {codigo: 149, id: 187, descripcion: '	GLOWSTEN, PAD ROJO PARA MAQUINA DE 17"Unidad	 ', valor: 19258},
    {codigo: 150, id: 188, descripcion: '	GLOWSTEN, PAD ROJO PARA MAQUINA DE 20"Unidad	 ', valor: 27676},
    {codigo: 151, id: 189, descripcion: '	GLOWSTEN, PAD BLANCO PARA MAQUINA DE 17"Unidad	 ', valor: 19258},
    {codigo: 152, id: 190, descripcion: '	GLOWSTEN, PAD BLANCO PARA MAQUINA DE 20"Unidad	 ', valor: 27676},
    {codigo: 153, id: 191, descripcion: '	GLOWSTEN, PAD PPC NATURAL PARA MAQUINA DE 17"Unidad	 ', valor: 19258},
    {codigo: 154, id: 192, descripcion: '	GLOWSTEN, PAD PPC NATURAL PARA MAQUINA DE 20"Unidad	 ', valor: 27676},
    {codigo: 155, id: 193, descripcion: '	GLOWSTEN, PAD GRIS PARA MAQUINA DE 17"Unidad	 ', valor: 21092},
    {codigo: 156, id: 194, descripcion: '	GLOWSTEN, PAD GRIS PARA MAQUINA DE 20"Unidad	 ', valor: 30311},
    {codigo: 157, id: 195, descripcion: '	GLOWSTEN, CEPILLO DE 17"Unidad	 ', valor: 123848},
    {codigo: 158, id: 196, descripcion: '	GLOWSTEN, CEPILLO DE 20"Unidad	 ', valor: 166882},
    {codigo: 163, id: 197, descripcion: '	GLOWSTEN, PAD BONNET 17"Unidad	 ', valor: 87694},
    {codigo: 164, id: 198, descripcion: '	GLOWSTEN, PAD BONNET 20"Unidad	 ', valor: 10133},
    {codigo: 165, id: 199, descripcion: '	GLOWSTEN, MAGIK PADPad para Máquina de 17"	 ', valor: 92206},
    {codigo: 166, id: 200, descripcion: '	GLOWSTEN, MAGIK PADPad para Máquina de 20"	 ', valor: 96749},
    {codigo: 167, id: 201, descripcion: '	GLOWSTEN, MAGIK PAD PARA RINCONEROUnidad	 ', valor: 14876},
    {codigo: 168, id: 202, descripcion: '	REPUESTO PARA RINCONERO COLOR CAFEUnidad	 ', valor: 6493},
    {codigo: 169, id: 203, descripcion: '	GATILLO INDUSTRIALUnidad	 ', valor: 4245},
    {codigo: 170, id: 204, descripcion: '	RINCONEROUnidad	 ', valor: 30595},
    {codigo: 171, id: 205, descripcion: '	PALO PARA RINCONEROUnidad	 ', valor: 15876},
    {codigo: 172, id: 206, descripcion: '	RINCONERO MANUALUnidad	 ', valor: 30595},
    {codigo: 173, id: 207, descripcion: '	GLOWSTEN, LIMPIADOR CONCENTRADO   Garrafa	 ', valor: 438198},
    {codigo: 174, id: 208, descripcion: '	GLOWSTEN, LIMPIADOR DESINFECTANTE   Garrafa	 ', valor: 37159},
    {codigo: 175, id: 209, descripcion: '	GLOWSTEN, LAMITECH   Garrafa	 ', valor: 47262},
    {codigo: 177, id: 210, descripcion: '	GLOWSTEN, REMOVEDOR   Garrafa	 ', valor: 37988},
    {codigo: 178, id: 211, descripcion: '	GLOWSTEN, DESENGRASANTE INDUSTRIAL   Garrafa	 ', valor: 45334},
    {codigo: 179, id: 212, descripcion: '	GLOWSTEN, MAGIK   Garrafa	 ', valor: 30403},
    {codigo: 180, id: 213, descripcion: '	GLOWSTEN, CERAMIC   Garrafa	 ', valor: 47262},
    {codigo: 181, id: 214, descripcion: '	GLOWSTEN, BASE SELLADORA   Garrafa	 ', valor: 97806},
    {codigo: 182, id: 215, descripcion: '	GLOWSTEN, ACABADO SELLADOR   Garrafa	 ', valor: 92787},
    {codigo: 183, id: 216, descripcion: '	GLOWSTEN, REACONDICIONADOR   Garrafa	 ', valor: 64567},
    {codigo: 184, id: 217, descripcion: '	GLOWSTEN, CAPTADOR DE POLVO   Garrafa	 ', valor: 66908},
    {codigo: 185, id: 218, descripcion: '	GLOWSTEN, CERA AUTOBRILLANTE   Garrafa	 ', valor: 53269},
    {codigo: 186, id: 219, descripcion: '	GLOWSTEN, LIMPIA-BRILLADOR   Garrafa	 ', valor: 4003},
    {codigo: 187, id: 220, descripcion: '	GLOWSTEN, CERA AUTOBRILLANTE ROJA   Garrafa	 ', valor: 51915},
    {codigo: 188, id: 221, descripcion: '	GLOWSTEN, CERA MADERA   Garrafa	 ', valor: 40220},
    {codigo: 189, id: 222, descripcion: '	GLOWSTEN, CERA MADERA   Garrafa	 ', valor: 40220},
    {codigo: 190, id: 223, descripcion: '	GLOWSTEN, CERA MADERA   Garrafa	 ', valor: 40220},
    {codigo: 191, id: 224, descripcion: '	GLOWSTEN, AVANTI   Garrafa	 ', valor: 13332},
    {codigo: 192, id: 225, descripcion: '	GLOWSTEN, MILENIUM   Garrafa	 ', valor: 47469},
    {codigo: 193, id: 226, descripcion: '	GLOWSTEN, DESMANCHADOR ALFOMBRAS   Garrafa	 ', valor: 74573},
    {codigo: 194, id: 227, descripcion: '	GLOWSTEN, SHAMPOO ALFOMBRAS   Garrafa	 ', valor: 35916},
    {codigo: 195, id: 228, descripcion: '	GLOWSTEN, BONNET BUFFING   Garrafa	 ', valor: 34897},
    {codigo: 196, id: 229, descripcion: '	GLOWSTEN, DESMANCHADOR PARA BAÑOS   Garrafa	 ', valor: 33303},
    {codigo: 197, id: 230, descripcion: '	GLOWSTEN, GERMICIDA CUATERNARIO   Garrafa	 ', valor: 42975},
    {codigo: 198, id: 231, descripcion: '	GLOWSTEN, LIMPIA VIDRIOS   Garrafa	 ', valor: 18165},
    {codigo: 199, id: 232, descripcion: '	GLOWSTEN, BRILLA-METAL M   Garrafa	 ', valor: 66017},
    {codigo:40000042,id:233,descripcion:'ACEITE CORPORAL JOHNSON X 300MM UNIDAD ',valor:21945},
    {codigo:10001176,id:234,descripcion:'ACEITE LUBRICANTE PENETRANTE 5-56 400 CM ',valor:12315},
    {codigo:40000015,id:235,descripcion:'ALCOHOL ANTISEPTICO BOTELLA X 120 ML ',valor:1885},
    {codigo:40000047,id:236,descripcion:'ALCOHOL ANTISEPTICO BOTELLA X 750 CC ',valor:4400},
    {codigo:40000044,id:237,descripcion:'ALGODON JGB QUIRURGICO PAQUETE X 500 GRS ',valor:13570},
    {codigo:10000714,id:238,descripcion:'AMBIENTADOR AEROSOL ELI.OLO 300C PACIFIC REF.78311 ',valor:8878},
    {codigo:10000095,id:239,descripcion:'AMBIENTADOR AEROSOL GLADE 400CC SURTIDO ',valor:10920},
    {codigo:10000416,id:240,descripcion:'AMBIENTADOR CITRUS KIMCARE 48MM REPUESTO ',valor:39358},
    {codigo:10000378,id:241,descripcion:'AMBIENTADOR GEL DISCO REPUESTO X 30GMS ',valor:2020},
    {codigo:10000179,id:242,descripcion:'APARATO LIMPIAVIDRIO 35CM M/MADERA 120C ',valor:12098},
    {codigo:10000870,id:243,descripcion:'APARATO LIMPIAVIDRIO DUO 35CM ROJO/BLANC ',valor:110370},
    {codigo:10000855,id:244,descripcion:'APARATO LIMPIAVIDRIO DUO 45CM ROJO/BLANC ',valor:124309},
    {codigo:10000875,id:245,descripcion:'ARMAZON FLEXIBLE FLEXI-FRAME 28 CM NEGRO ',valor:157101},
    {codigo:20000253,id:246,descripcion:'AROMATICA CIDRON CAJA X 20 UND JAIBEL ',valor:2780},
    {codigo:20000458,id:247,descripcion:'AROMATICA D/PANELA INSTANTANEA X 25 SOBR ',valor:3318},
    {codigo:20000242,id:248,descripcion:'AROMATICA FRUTALIA LIQUIDA SURTI X 60SOB ',valor:30525},
    {codigo:20000241,id:249,descripcion:'AROMATICA FRUTALIA LIQUIDA SURTI X120SOB ',valor:52315},
    {codigo:20000467,id:250,descripcion:'AROMATICA INSTITUCIONAL LIMONARIA X 25 ',valor:1290},
    {codigo:20000468,id:251,descripcion:'AROMATICA JAIBEL MANZANILLA CAJA X 20 ',valor:2835},
    {codigo:20000469,id:252,descripcion:'AROMATICA JAIBEL YERBABUENA CAJA X 20 ',valor:2830},
    {codigo:20000054,id:253,descripcion:'AROMATICA TISANA PARAISO SABOR ALBAHACA ',valor:1933},
    {codigo:20000254,id:254,descripcion:'AROMATICA TORONJIL CAJA X 20UND JAIBEL ',valor:2835},
    {codigo:20000475,id:255,descripcion:'AROMATICA TRADICIONAL LIMONARIA CAJA X20 ',valor:2782},
    {codigo:10000770,id:256,descripcion:'ATOMIZADOR PLAST. BLANCO C/PISTOLA 1000C ',valor:2320},
    {codigo:10000123,id:257,descripcion:'ATOMIZADOR PLASTICO CON PISTOLA 500CC ',valor:1918},
    {codigo:20000139,id:258,descripcion:'AZUCAR BLANCA LIGHT CAJA X100 SOBRE INCA ',valor:5470},
    {codigo:20000057,id:259,descripcion:'AZUCAR BLANCA PAQX200 TUBIPACK 5GR INCAU ',valor:5798},
    {codigo:20000156,id:260,descripcion:'AZUCAR BLANCA PAQX200 TUBIPACK 5GR RIOPA ',valor:5416},
    {codigo:20000080,id:261,descripcion:'AZUCAR MORENA PAQ X 200 SOBRES DE 5 GR ',valor:5480},
    {codigo:10000541,id:262,descripcion:'BALDE PLASTICO 12LT AZUL TROMOPLAST ',valor:10150},
    {codigo:10000661,id:263,descripcion:'BALDE PLASTICO 12LT COLOR SURTIDO ',valor:6900},
    {codigo:10000518,id:264,descripcion:'BALDE PLASTICO 12LT ROJO CAMPERO ',valor:7850},
    {codigo:10000519,id:265,descripcion:'BALDE PLASTICO 12LT VERDE CAMPERO ',valor:7850},
    {codigo:10001397,id:266,descripcion:'BLANQUEADOR ORION AL 5% X 5 GALONES ',valor:31350},
    {codigo:10001647,id:267,descripcion:'BLANQUEADOR ORION X 20LT AL 8%   ',valor:34550},
    {codigo:230000123,id:268,descripcion:'BOLSA PLAST.AZUL 100X120CM PAQX6 ',valor:7740},
    {codigo:230000334,id:269,descripcion:'BOLSA PLAST.AZUL BIO. 60X90CM PAQX6 ',valor:1680},
    {codigo:230000322,id:270,descripcion:'BOLSA PLAST.AZUL BIO. 66+12+12X130 PAQX6 ',valor:6150},
    {codigo:230000328,id:271,descripcion:'BOLSA PLAST.AZUL BIODE.51+12+12X95 PAQX6 ',valor:3135},
    {codigo:230000169,id:272,descripcion:'BOLSA PLAST.BLANCA 100X150CM PAQX10 ',valor:10965},
    {codigo:230000329,id:273,descripcion:'BOLSA PLAST.BLANCA BIO FUE12 51X95 PAQX6 ',valor:3130},
    {codigo:230000323,id:274,descripcion:'BOLSA PLAST.BLANCA BIO.66+12+12X130 PQX6 ',valor:6155},
    {codigo:230000130,id:275,descripcion:'BOLSA PLAST.GRIS 50X50CM PAQX6 ',valor:988},
    {codigo:230000324,id:276,descripcion:'BOLSA PLAST.GRIS BIO.66+12+12X130 PAQX6U ',valor:6150},
    {codigo:230000330,id:277,descripcion:'BOLSA PLAST.GRIS BIODE.12+12+51X95 PAQX6 ',valor:3130},
    {codigo:230000336,id:278,descripcion:'BOLSA PLAST.GRIS BIODEG.60X90CM PAQX6UN ',valor:1685},
    {codigo:230000331,id:279,descripcion:'BOLSA PLAST.NARANJA BIO.12+12+51X95 PQX6 ',valor:3135},
    {codigo:230000325,id:280,descripcion:'BOLSA PLAST.NARANJA BIO.66+12+12X130X6UN ',valor:6155},
    {codigo:230000337,id:281,descripcion:'BOLSA PLAST.NARANJA BIODEG.60X90CM PAQX6 ',valor:1680},
    {codigo:230000321,id:282,descripcion:'BOLSA PLAST.NEGRA BIO.66+12+12X130 PAQX6 ',valor:5805},
    {codigo:230000345,id:283,descripcion:'BOLSA PLAST.ROJA BIO. 12+12+51X95 PAQX6U ',valor:3095},
    {codigo:230000332,id:284,descripcion:'BOLSA PLAST.VERDE BIO.51+12+12X95 PAQX6U ',valor:3140},
    {codigo:230000326,id:285,descripcion:'BOLSA PLAST.VERDE BIO.66+12+12X130 PAQX6 ',valor:6150},
    {codigo:230000338,id:286,descripcion:'BOLSA PLAST.VERDE BIODEG.60X90CM PAQX6UN ',valor:1685},
    {codigo:120000518,id:287,descripcion:'BOLSILLO P/LAMINACION CARTA PAQ X 100 ',valor:66070},
    {codigo:120000090,id:288,descripcion:'BOLSILLO PARA 2 CD EN FELPA COLORES UNID ',valor:172},
    {codigo:10000446,id:289,descripcion:'BRILLADOR 59C MEC+ARM+CAB(2418+2419+817) ',valor:38440},
    {codigo:10000326,id:290,descripcion:'BRILLADOR ALGODON REPUESTO 100 CM 1A ',valor:22760},
    {codigo:10001337,id:291,descripcion:'BRILLADOR ALGODON S/SOPORTE 60 CM MELODY ',valor:17330},
    {codigo:10000234,id:292,descripcion:'BRILLADOR ALGODON SIN SOPORTE 80 CMS ',valor:19580},
    {codigo:10000854,id:293,descripcion:'BRILLADOR PISO 100 CM MANGO ALUM.150 CM ',valor:55270},
    {codigo:10001423,id:294,descripcion:'BRILLADOR VER. (M/AL140C+ARM+MO.MIC100C) ',valor:220480},
    {codigo:20000261,id:295,descripcion:'CAFE MOLIDO INSTITUCIONA SELLO ROJO 500G ',valor:9650},
    {codigo:10000740,id:296,descripcion:'CARRO ESCURRIDOR P/TRAPERO 35LT AMARILLO ',valor:298100},
    {codigo:10000254,id:297,descripcion:'CARRO ESCURRIDOR P/TRAPERO 35LT AMARILLO ',valor:180750},
    {codigo:10000859,id:298,descripcion:'CEPILLO CURVO P/LIMPIAR TUBERIAS DIFUSOR ',valor:91450},
    {codigo:10001422,id:299,descripcion:'CEPILLO CURVO P/TUBERIA 10X5X41CM ',valor:40330},
    {codigo:10000609,id:300,descripcion:'CEPILLO DENTAL COLGATE PREMIER CLEAN ',valor:1936},
    {codigo:10000131,id:301,descripcion:'CEPILLO DURO TIPO PLANCHA SURTIDO ',valor:1805},
    {codigo:10000382,id:302,descripcion:'CEPILLO P/FRASCOS REDONDO CERDA EN NYLON ',valor:5800},
    {codigo:10001510,id:303,descripcion:'CEPILLO P/FRASCOS REDONDO MANGO AZUL ',valor:5800},
    {codigo:10000196,id:304,descripcion:'CEPILLO P/PISO C/ESCURRIDOR M/MADERA ',valor:5765},
    {codigo:10000062,id:305,descripcion:'CEPILLO P/PISO CON ESCURRIDOR C/META 120 ',valor:6455},
    {codigo:10000197,id:306,descripcion:'CEPILLO PAREDES Y TECHOS REDON. M/MET140 ',valor:12440},
    {codigo:10000327,id:307,descripcion:'CEPILLO T/EDIS BASE MADERA MANGO METALIC ',valor:29580},
    {codigo:10000237,id:308,descripcion:'CERA POLIMERICA AUTOBRILLANTE ROJA X 5GL ',valor:164450},
    {codigo:10001259,id:309,descripcion:'CERA POLIMERICA AUTOBRILLANTE X 3000CC ',valor:28370},
    {codigo:10000485,id:310,descripcion:'CERA POLIMERICA BLANCA X 20LT SELLACRIL ',valor:194700},
    {codigo:10000830,id:311,descripcion:'CERA POLIMERICA NEUTRA CANELA GARRAFA 20 ',valor:211158},
    {codigo:10000113,id:312,descripcion:'CHUPA ASEO PARA SANITARIO MANGO PLASTICO ',valor:4490},
    {codigo:10000833,id:313,descripcion:'CHURRUSCO BAÑO 40cm CON BASE TRIANG BLAN ',valor:9174},
    {codigo:10000176,id:314,descripcion:'CHURRUSCO DELGADO P/GRECA 31CM ',valor:2460},
    {codigo:10000059,id:315,descripcion:'CREMA JABON LAVALOZA AXION X 450 GRS ',valor:4560},
    {codigo:20000104,id:316,descripcion:'CUCHARA PLASTICA DULCERA BLANCA PAQX100 ',valor:3003},
    {codigo:20000291,id:317,descripcion:'CUCHARA PLASTICA GRANDE BLANCA PAQX100 ',valor:7765},
    {codigo:20000483,id:318,descripcion:'CUCHILLO PLASTICO GRANDE BLANCO PAQX100 ',valor:3180},
    {codigo:70002271,id:319,descripcion:'DELANTAL CARNAZA GRIS 60X90 CM ',valor:19940},
    {codigo:10001301,id:320,descripcion:'DESENGRASANTE X3800CC C/AROMA QUIMISERVI ',valor:16425},
    {codigo:10000458,id:321,descripcion:'DESINCRUSTANTE INORGANICO GARRAFA X 20LT ',valor:80810},
    {codigo:10001284,id:322,descripcion:'DESINFECTANTE SUMA CHLOR D4.4 GALON X3LT ',valor:34640},
    {codigo:10000074,id:323,descripcion:'DETERGENTE (AS) EN POLVO DERSA X 500GR ',valor:3005},
    {codigo:10000753,id:324,descripcion:'DETERGENTE (AS) EN POLVO X 1000GR LIMON ',valor:5950},
    {codigo:10000144,id:325,descripcion:'DETERGENTE E/POLVO BULTO X 20 KLS DERSA ',valor:87885},
    {codigo:10000669,id:326,descripcion:'DETERGENTE POLVO TOP ULTRA FLORAL X5000G ',valor:36230},
    {codigo:130000300,id:327,descripcion:'DIRECTORIO LIBRO CONTABILIDAD 080-OZK ',valor:9830},
    {codigo:10000375,id:328,descripcion:'DISCO BRILLADOR CAFE 16" GLOWSTEN ',valor:13780},
    {codigo:10000615,id:329,descripcion:'DISCO BRILLADOR ROJO 16" GLOWSTEN ',valor:13770},
    {codigo:10000255,id:330,descripcion:'DISCO P/BRILLADORA BLANCO 16" 3M ',valor:13633},
    {codigo:10000142,id:331,descripcion:'DISCO P/BRILLADORA ROJO 16" REMOVER 3M ',valor:13782},
    {codigo:10000070,id:332,descripcion:'DISPENSADOR P/JABON BOCCHERINI BLANCO ',valor:40240},
    {codigo:20000249,id:333,descripcion:'ENDULZANTE ALDY C/STEVIA PAQ X 70 SOBRES ',valor:12500},
    {codigo:10000514,id:334,descripcion:'ESCOBA DURA IMPERIAL AMARILLA REPUESTO ',valor:5570},
    {codigo:10001536,id:335,descripcion:'ESCOBA DURA IMPERIAL NEGRA REPUESTO ',valor:5570},
    {codigo:10000567,id:336,descripcion:'ESCOBA DURA IMPERIAL ROJA REPUESTO ',valor:5570},
    {codigo:10000512,id:337,descripcion:'ESCOBA DURA T/ZULIA AMARIL CAB/MAD 140C ',valor:4778},
    {codigo:10001398,id:338,descripcion:'ESCOBA DURA T/ZULIA AMARILLA REPUESTO ',valor:2672},
    {codigo:10001400,id:339,descripcion:'ESCOBA DURA T/ZULIA ROJA REPUESTO ',valor:2670},
    {codigo:10000546,id:340,descripcion:'ESCOBA DURA T/ZULIA VERDE REPUESTO ',valor:2240},
    {codigo:10000547,id:341,descripcion:'ESCOBA REPUESTO TIPO ZULIA SUAVE ROJA SI ',valor:3135},
    {codigo:10000473,id:342,descripcion:'ESCOBA SUAVE IMPERIAL AMARILLA SIN CABO ',valor:5575},
    {codigo:10000554,id:343,descripcion:'ESCOBA SUAVE IMPERIAL AZUL REPUESTO ',valor:5580},
    {codigo:10000553,id:344,descripcion:'ESCOBA SUAVE IMPERIAL ROJA REPUESTO ',valor:5570},
    {codigo:10000555,id:345,descripcion:'ESCOBA SUAVE IMPERIAL VERDE REPUESTO ',valor:5575},
    {codigo:10000516,id:346,descripcion:'ESCOBA SUAVE T/ZULIA BLANCA CABO MAD 140 ',valor:4785},
    {codigo:10000549,id:347,descripcion:'ESCOBA SUAVE T/ZULIA ECO AZUL REPUESTO ',valor:2265},
    {codigo:60000106,id:348,descripcion:'ESCUADRA FABER CASTELL 45° 32CM ',valor:2725},
    {codigo:60000107,id:349,descripcion:'ESCUADRA FABER CASTELL 60°32CM ',valor:2865},
    {codigo:10000826,id:350,descripcion:'ESCURRIDOR DE PISOS DOBLE LABIO 45.7CM ',valor:57980},
    {codigo:10000040,id:351,descripcion:'ESPONJILLA BOM BRIL X 12 UNDS BOM BRIL ',valor:3168},
    {codigo:10000492,id:352,descripcion:'FIBRA LIMPIADORA ABRASIVA SABRA ETERNA ',valor:273},
    {codigo:10000817,id:353,descripcion:'FIBRA LIMPIADORA ABRASIVA VERDE PAQX12 ',valor:7370},
    {codigo:10000691,id:354,descripcion:'FIBRA LIMPIADORA BRITTEX VERDE LN0000090 ',valor:368},
    {codigo:20000031,id:355,descripcion:'FILTRO P/GRECA TELA LIBRA UNIDAD ',valor:2012},
    {codigo:30000038,id:356,descripcion:'FLEXOMETRO 5 METROS 19 MM ',valor:4645},
    {codigo:130000334,id:357,descripcion:'FM.3014 CONTROL DE EXISTENCIAS PAQX100 ',valor:18350},
    {codigo:70000047,id:358,descripcion:'GORRO DESECHABLE TIPO ORUGA PAQ. X 100 U ',valor:19680},
    {codigo:40000069,id:359,descripcion:'GORRO EN REDECILLAS VELO NEGRO UNIDAD ',valor:369},
    {codigo:70003749,id:360,descripcion:'GUANTE ALGODON BLANCO TALLA 10 C/DISENO ',valor:3345},
    {codigo:70003746,id:361,descripcion:'GUANTE ALGODON BLANCO TALLA 11 C/DISENO ',valor:3345},
    {codigo:70003753,id:362,descripcion:'GUANTE ALGODON BLANCO TALLA 6 C/DISENO ',valor:3345},
    {codigo:70003747,id:363,descripcion:'GUANTE ALGODON BLANCO TALLA 7 C/DISENO ',valor:3345},
    {codigo:70003754,id:364,descripcion:'GUANTE ALGODON BLANCO TALLA 8 C/DISENO ',valor:3344},
    {codigo:70003755,id:365,descripcion:'GUANTE ALGODON BLANCO TALLA 9 C/DISENO ',valor:3344},
    {codigo:70000310,id:366,descripcion:'GUANTE EDGE POLIESTER NEGRO PAR T.7 ',valor:3875},
    {codigo:70000622,id:367,descripcion:'GUANTE HYFLEX ANTICORTE NIVEL 3 T.10 PAR ',valor:31985},
    {codigo:70000621,id:368,descripcion:'GUANTE HYFLEX ANTICORTE NIVEL 3 T.9 PAR ',valor:31985},
    {codigo:70000153,id:369,descripcion:'GUANTE HYFLEX NYLON/NITRILO AZUL PAR T.8 ',valor:13756},
    {codigo:70000594,id:370,descripcion:'GUANTE HYFLEX NYLON/NITRILO AZUL T.7 PAR ',valor:13780},
    {codigo:70002248,id:371,descripcion:'GUANTE INDUSTRIAL AZUL 8 CAL.35 ',valor:5290},
    {codigo:70000500,id:372,descripcion:'GUANTE INDUSTRIAL AZUL 9 CAL.35 ',valor:4750},
    {codigo:70000059,id:373,descripcion:'GUANTE INGENIERO VAQUETA REFORZADO PAR ',valor:8050},
    {codigo:70000800,id:374,descripcion:'GUANTE MONOCOLOR CAUCHO AZUL PAR T. 8 ',valor:4636},
    {codigo:70000801,id:375,descripcion:'GUANTE MONOCOLOR CAUCHO AZUL PAR T. 9 ',valor:4640},
    {codigo:70000451,id:376,descripcion:'GUANTE SENSILITE NYLON/POLIU.NEGRO T.7 ',valor:5925},
    {codigo:70000171,id:377,descripcion:'GUANTE SENSILITE NYLON/POLIU.NEGRO T.8 ',valor:5925},
    {codigo:70000038,id:378,descripcion:'GUANTE SOLVEX NITRILO VERDE T.8 22MM/18" ',valor:22150},
    {codigo:70003337,id:379,descripcion:'GUANTE SOLVEX NITRILO VERDE T.9 22MM MAQ ',valor:19730},
    {codigo:70000041,id:380,descripcion:'GUANTE SOLVEX NITRILO VERDE T.9 22MM/18" ',valor:19795},
    {codigo:10000764,id:381,descripcion:'GUANTES BICOLOR CAL 35 NEG/VER T.7 ',valor:4560},
    {codigo:10000765,id:382,descripcion:'GUANTES BICOLOR CAL 35 NEG/VER T.9 ',valor:4560},
    {codigo:10000441,id:383,descripcion:'GUANTES CAUCHO ROSADO PAR TALLA 8 CAL 20 ',valor:3565},
    {codigo:20000252,id:384,descripcion:'INFUSION FRUTOS ROJOS MORA-FRESA CAJX20 ',valor:6778},
    {codigo:10000153,id:385,descripcion:'INSECTICIDA RAID MAX MATA RASTREROS 235C ',valor:13700},
    {codigo:20000442,id:386,descripcion:'INSTACREAM LIGHT FRASCO 450 GRMS ',valor:13400},
    {codigo:20000021,id:387,descripcion:'INSTACREM NORMAL FRASCO X 450GRS ',valor:12895},
    {codigo:20000445,id:388,descripcion:'INSTACREM NORMAL PAQ X 100 SOBRES(4GR) ',valor:11462},
    {codigo:10000452,id:389,descripcion:'JABON LAVALOZA CREMA LIMON X 900 GR ',valor:6260},
    {codigo:10001217,id:390,descripcion:'JABON LIQUIDO P/MANOS ANTIBAC.HANDY X5LT ',valor:89798},
    {codigo:10001306,id:391,descripcion:'JABON LIQUIDO P/MANOS NEUTRO X3785 TATYS ',valor:13234},
    {codigo:10001233,id:392,descripcion:'JABON LIQUIDO PARA MANOS X 3000 CC ORION ',valor:8300},
    {codigo:10001282,id:393,descripcion:'JABON LIQUIDO PARA MANOS X 3750CC FLORAL ',valor:10010},
    {codigo:10001731,id:394,descripcion:'JABON P/MANOS SPRAY FAMILIA X 1000 ML REF.80590 ',valor:25100},
    {codigo:10001229,id:395,descripcion:'LIMPIADOR DESENGRASANTE MULTIUSOS X3000C ',valor:21110},
    {codigo:10000333,id:396,descripcion:'LIMPIADOR DESIN.CUATERNARIO SURTIDOX3750 ',valor:11400},
    {codigo:10000077,id:397,descripcion:'LIMPIADOR DESINFECTANTE FABULOSO 1000CC ',valor:6400},
    {codigo:10000635,id:398,descripcion:'LIMPIADOR DESINFECTANTE PINOLINA X3785CC ',valor:14770},
    {codigo:10000111,id:399,descripcion:'LIMPIADOR DESINFECTANTE SANPIC X 1000CC ',valor:6290},
    {codigo:10000146,id:400,descripcion:'LIMPIADOR EN POLVO 1A PINO X 500GR ',valor:2720},
    {codigo:10000860,id:401,descripcion:'LIMPIADOR GERMICIDA CUATERNARIO LIMON ',valor:32800},
    {codigo:180000312,id:402,descripcion:'LIMPIADOR P/COMPUTADORES SPRAY X 300 CM3 ',valor:9348},
    {codigo:10000080,id:403,descripcion:'LIMPIADOR PARA HORNOS EASY OFF X 275 GRM ',valor:7520},
    {codigo:10001242,id:404,descripcion:'LIMPIAVIDRIOS POTENTE X 500 C/PISTOLA ',valor:3890},
    {codigo:10001298,id:405,descripcion:'LIMPIAVIDRIOS QUIMISERVI GALON X 3000CC ',valor:7416},
    {codigo:10000362,id:406,descripcion:'LIMPION EN TOALLA BLANCO 40X70CM ALGODÓN ',valor:2682},
    {codigo:10000575,id:407,descripcion:'LIMPION IND.WYPALL X-60 BLANCO X 200MT ',valor:66288},
    {codigo:10000601,id:408,descripcion:'LIMPION INDUSTRIAL WYPALL X-60 300MT BCO ',valor:95900},
    {codigo:10000533,id:409,descripcion:'LIMPION WYPALL X60 BLANCO X8PAQ(60PAÑOS) ',valor:85640},
    {codigo:10000139,id:410,descripcion:'LUSTRAMUEBLES 3 EN 1 TAPARASGUÑOS X 200C ',valor:7220},
    {codigo:10000239,id:411,descripcion:'LUSTRAMUEBLES PRIDE AEROSOL NATURAL X400 ',valor:14900},
    {codigo:10000877,id:412,descripcion:'MANGO ALUM.AMARI.ERGONOMICO EXTENS.A182C ',valor:70851},
    {codigo:10001519,id:413,descripcion:'MANGO ALUM.ANODIZ.EXTE 2X2 M QUICKCON AZ ',valor:123100},
    {codigo:10000835,id:414,descripcion:'MANGO ALUM.ANODIZ.QUICK/CONN VERDE 140C ',valor:21150},
    {codigo:10000872,id:415,descripcion:'MANGO ALUM.ANODIZ.QUICK/CONNE AZUL 140CM ',valor:21150},
    {codigo:10000873,id:416,descripcion:'MANGO ALUM.ANODIZ.QUICK/CONNE ROJO 140CM ',valor:21150},
    {codigo:10000879,id:417,descripcion:'MANGO ALUMINIO 150CM TAPON ROSCA 7/8" ',valor:13350},
    {codigo:10001417,id:418,descripcion:'MANGO ALUMINIO ANOD.C/GANCHO AZUL 150CM ',valor:33340},
    {codigo:10001513,id:419,descripcion:'MANGO ALUMINIO ANOD.C/GANCHO VERDE 150CM ',valor:33340},
    {codigo:10000818,id:420,descripcion:'MANGO ALUMINIO EXTENSIBLE 300 CM X 3 EXT ',valor:27432},
    {codigo:10000869,id:421,descripcion:'MANGO ALUMINIO EXTENSIBLE 300 CM X 3 EXT ',valor:134250},
    {codigo:10000398,id:422,descripcion:'MANGO MADERA PLASTIFICADO 140 CMS ',valor:2550},
    {codigo:10000562,id:423,descripcion:'MANGO METALICO AMARILLO 140CM ROSCA TAPO ',valor:3640},
    {codigo:10000564,id:424,descripcion:'MANGO METALICO AZUL 140 CM 1A ',valor:2670},
    {codigo:10000453,id:425,descripcion:'MANGO METALICO BLANCO 120CM ',valor:2185},
    {codigo:10000563,id:426,descripcion:'MANGO METALICO BLANCO 140CM C/TAPON ROSC ',valor:2550},
    {codigo:10000397,id:427,descripcion:'MANGO METALICO P/BARRECALLE X 150 CM ',valor:5300},
    {codigo:10000565,id:428,descripcion:'MANGO METALICO ROJO 140CM C/TAPON-ROSCA ',valor:2630},
    {codigo:10000566,id:429,descripcion:'MANGO METALICO VERDE 140CM ',valor:3850},
    {codigo:20000288,id:430,descripcion:'MEZCLADOR PLASTICO EMP.INDIVIDUAL X1000U ',valor:6620},
    {codigo:20000015,id:431,descripcion:'MEZCLADOR PLASTICO REDONDO PAQ X 1000UND ',valor:2225},
    {codigo:20000183,id:432,descripcion:'MEZCLADOR PLASTICO REDONDO X 800UND ',valor:1066},
    {codigo:10000874,id:433,descripcion:'MOPA AZUL TRAPEADOR POLVO KUT-A-WAY 93CM ',valor:77110},
    {codigo:10000876,id:434,descripcion:'MOPA MICROFIBRA P/VIDRIO ARMAZON FLEXIBL ',valor:15819},
    {codigo:10001419,id:435,descripcion:'MOPA MICROFIBRA PLANA 12X44 CM ',valor:28940},
    {codigo:10000823,id:436,descripcion:'MOPA MICROFIBRA VERDE 15X45 CM REPUESTO ',valor:14400},
    {codigo:10001691,id:437,descripcion:'PAÑITOS HUMEDOS BLANCOS PAQX96 HUGGIES ',valor:10425},
    {codigo:10000250,id:438,descripcion:'PAÑUELO FACIAL AUTO D/HOJA CAJ X 75 FAMI REF.75100 ',valor:3506},
    {codigo:10000750,id:439,descripcion:'PAPEL HIG.JUMBO BLANCO 170MT T/H PAQX4 REF.71177 ',valor:29100},
    {codigo:10000338,id:440,descripcion:'PAPEL HIG.JUMBO BLANCO 250MT D/H PAQX4 REF.71157 ',valor:32600},
    {codigo:10000761,id:441,descripcion:'PAPEL HIG.JUMBO BLANCO 95MT T/H PAQX4 REF.71197 ',valor:19507},
    {codigo:10000747,id:442,descripcion:'PAPEL HIG.JUMBO NATURAL 250MT D/H PAQX4 REF.7145 ',valor:28950},
    {codigo:120001414,id:443,descripcion:'PLASTICO ADHESIVO TRANSPARENTE ROLLOX20 ',valor:40810},
    {codigo:20000033,id:444,descripcion:'PLATO PLASTICO BLANCO PANDO 23CM PAQX20 ',valor:3015},
    {codigo:20000446,id:445,descripcion:'PLATO PLASTICO PEQUEÑO BLANCO PAQ X 20 ',valor:1795},
    {codigo:10000393,id:446,descripcion:'PORTATRAPERO GAN.PLAS 060 CAB.810 MET120 ',valor:11120},
    {codigo:10000825,id:447,descripcion:'PORTATRAPERO GAN.PLAS CABO ALUMINIO 152C ',valor:50980},
    {codigo:10000257,id:448,descripcion:'PORTATRAPERO METALICO COLO/SUR CABO 140C ',valor:17090},
    {codigo:10001590,id:449,descripcion:'RECOGEDOR PLAST.AZUL C/BANDA REPUESTO ',valor:3510},
    {codigo:10001592,id:450,descripcion:'RECOGEDOR PLAST.ROJO C/BANDA REPUESTO ',valor:2520},
    {codigo:10001594,id:451,descripcion:'RECOGEDOR PLAST.VERDE C/BANDA REPUESTO ',valor:2520},
    {codigo:10000925,id:452,descripcion:'RECOGEDOR PLASTICO ROJO C/BANDA CABO PVC ',valor:2600},
    {codigo:10001292,id:453,descripcion:'REMOVEDOR DE CERA GALON X 5000CC X-TREM ',valor:19732},
    {codigo:10001316,id:454,descripcion:'REMOVEDOR DE CERA ORION GALON X 3750CC ',valor:13780},
    {codigo:10000318,id:455,descripcion:'REMOVEDOR DESENGRA.X-TREM CUÑETE X 20LT ',valor:82800},
    {codigo:10000856,id:456,descripcion:'REPUESTO FUNDA LIMPIAVIDRIO 45CM B/ROJO ',valor:39020},
    {codigo:70002216,id:457,descripcion:'SEÑAL DE PREVENCION PISO HUMEDO 64 CMS ',valor:21150},
    {codigo:10000666,id:458,descripcion:'SERVILLETA LUJO CUADRADA BLANCA X 200UND ',valor:13200},
    {codigo:10000023,id:459,descripcion:'SERVILLETAS CAFETERIA BLANCA PAQX100 FAM REF.72056 ',valor:1546},
    {codigo:10001518,id:460,descripcion:'SET MOPA MICROFIBRA AZUL 35X15CM C/M 120 ',valor:28900},
    {codigo:10000384,id:461,descripcion:'SHAMPOO P/ALFOMBRA QUIMISERVI GL X3800CC ',valor:10680},
    {codigo:10000831,id:462,descripcion:'SILICONA LIMPIEZA GALON X4000CC QUIMISER ',valor:46220},
    {codigo:10001285,id:463,descripcion:'SILICONA LIMPIEZA X 3000 CC QUIMISERVI ',valor:35430},
    {codigo:20000079,id:464,descripcion:'TE HINDU NEGRO CAJA X 100 SOBRES ',valor:14930},
    {codigo:20000477,id:465,descripcion:'TE SAMOA FRUTOS ROJOS CAJA X 20 SOBRES ',valor:6772},
    {codigo:20000107,id:466,descripcion:'TENEDOR PLASTICO GRANDE BLANCO PAQ X 100 ',valor:3450},
    {codigo:20000484,id:467,descripcion:'TENEDOR PLASTICO GRANDE BLANCO PAQX100 ',valor:3180},
    {codigo:10000608,id:468,descripcion:'TOALLA P/MANOS ALGODON 40X70CM AZUL ',valor:5235},
    {codigo:10000769,id:469,descripcion:'TOALLA P/MANOS ALGODON 40X70CM BLANCA ',valor:5305},
    {codigo:10000806,id:470,descripcion:'TOALLA P/MANOS BLANCA ROLLO X 80MT D/H ',valor:15042},
    {codigo:10000589,id:471,descripcion:'TOALLA P/MANOS BLANCA X 100MT T/H PRECOR REF.73575 / 7371 ',valor:11355},
    {codigo:10000499,id:472,descripcion:'TOALLA P/MANOS NATURAL X100MT T/HJ PRECO REF.73687 ',valor:14629},
    {codigo:10000216,id:473,descripcion:'TOALLA P/MANOS NATURAL Z T/H FAJO X150UN REF.73547 ',valor:4044},
    {codigo:10000133,id:474,descripcion:'TRAPERO ENCABADO 441G NO32 CABO MAD 140C ',valor:9820},
    {codigo:10000791,id:475,descripcion:'TRAPERO ENCABADO 500GR CABO MADERA 140CM ',valor:7630},
    {codigo:10000824,id:476,descripcion:'TRAPERO MECHA MEZCLA AZUL REPUESTO 600GR ',valor:33680},
    {codigo:10000871,id:477,descripcion:'TRAPERO MECHA MEZCLA ROJO REPUES 450 GRM ',valor:27175},
    {codigo:10001221,id:478,descripcion:'VARSOL PURO X 3000 CC PROAMERICA ',valor:21190},
    {codigo:20000479,id:479,descripcion:'VASO BIODEGRADABLE 4ONZ ALMIDON MAIZ X50 ',valor:5100},
    {codigo:20000237,id:480,descripcion:'VASO CARTON 6oz GENERICO PAQ X 50 UNIDAD ',valor:5695},
    {codigo:20000476,id:481,descripcion:'VASO CARTON CON DISEÑO 7oz PAQUETE X 50u ',valor:4938},
    {codigo:20000238,id:482,descripcion:'VASO CARTON GENERICO 4oz PAQUETE X 50UND ',valor:3658},
    {codigo:20000280,id:483,descripcion:'VASO ECOLOGICO 6OZ ALMIDON/MAIZ PAQX50 ',valor:6980},
    {codigo:20000158,id:484,descripcion:'VASO PLASTICO BLANCO 7oz PAQUETE X 50u D ',valor:1998},
    {codigo:20000449,id:485,descripcion:'VINAGRE BLANCO GALON X 3800 CC CASINO ',valor:7550},
    {codigo:230000173,id:486,descripcion:'VINIPEL TRANSPARENTE 38CM X 1500MT ',valor:72005},

    ];
var objectProductosShopping = [];

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});
/*var mySearchbar = myApp.searchbar('.searchbar', {
    searchList: '.list-block-search',
    searchIn: '.item-title'
})*/
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {

    $$.each(objectProductos, function (key, value) {
        let productoCard = `<li><div class="card">
                            <div class="card-content">
                                <div class="card-content-inner item-title">
                                    <p style="color: black; font-size: 16px;">
                                        Codigo: ${value.codigo}
                                    </p>
                                    ${value.descripcion}
                                     <div class="item-inner">
                                                    <div class="item-title" style="color: black">Costo: ${value.valor}</div>
                                                    <div class="item-after"><a href="#" class="button active agregar" data-producto=${value.codigo}>Agregar
                                                        Producto</a></div>
                                                </div>
                               
                                </div>
                            </div>
                        </div></li>`;

        $$("#lista").append(productoCard);

    });
    $$("#lista").append('<br>');
    $$('.agregar').on('click', function () {
        let codigoProducto = parseInt($$(this).data('producto'));
        myApp.modal({
            title: 'Producto Agregado',
            text: `Se ha agregado producto con el codigo:${$$(this).data('producto')}`,
            buttons: [
                {
                    text: 'Aceptar',
                    onClick: function () {
                        let reult = objectProductos.filter(x => x.codigo === codigoProducto)
                        reult = reult[0]
                        objectProductosShopping.push(
                            {
                                id: reult.id,
                                codigo: reult.codigo,
                                descripcion: reult.descripcion,
                                valor: reult.valor,
                                cantidad: 1
                            }
                        );
                    }

                }
            ]
        })

    })
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('shoppingCard', function (page) {
    // Do something here for "about" page
    //myApp.alert('codigo para chopping');
    $$.each(objectProductosShopping, function (key, value) {
        //console.log(key, value);
        let productoCard = `<div class="card" id="${value.codigo}">
                            <div class="card-content">
                                <div class="card-content-inner">
                                    <p style="color: black; font-size: 16px;">
                                        Codigo: ${value.codigo}
                                    </p>
                                    ${value.descripcion}
                                    <div class="list-block">
                                        <br>
                                        <ul>
                                            <li class="item-content">
                                                <div class="item-inner">
                                                    <div class="item-title" style="color: black">Costo: ${value.valor}</div>
                                                    <div class="buttons-row">
                                                      
                                                      <a class="tab-link  button less" data-codigo="${value.codigo}" style="text-overflow: clip; color: black">-</a>
                                                      
                                                      <a class="tab-link active button" id="stock${value.codigo}" style="text-overflow: clip; id="cantidad${value.codigo}">1</a>
                                                  
                                                      <a  class="tab-link button more" data-codigo="${value.codigo}" style="text-overflow: clip; color: black"">+</a>
                                                    </div>
                                                    <div class="item-after"><a href="#" class="button active eliminar" data-producto=${value.codigo}><i class="f7-icons" style="color: white; font-size: 13px;">trash_fill</i></a></div>
                                                </div>
                                                 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        $$(".shopping_list").append(productoCard);

    });
    $$('.less').on('click',function () {
        let cantidad = parseInt($$("#stock"+($$(this).data('codigo') )).text()) ;
        if(cantidad > 1){
            cantidad -= 1;
            $$("#stock"+($$(this).data('codigo') )).text(cantidad);
            let codigoProducto = parseInt($$(this).data('codigo'));
            let reult = objectProductosShopping.findIndex(x => x.codigo === codigoProducto)
            objectProductosShopping[reult].cantidad = cantidad;
        }

    });
    $$('.more').on('click',function () {
        let cantidad = parseInt($$("#stock"+($$(this).data('codigo') )).text()) ;
        cantidad += 1;
        $$("#stock"+($$(this).data('codigo') )).text(cantidad);
        let codigoProducto = parseInt($$(this).data('codigo'));
        let reult = objectProductosShopping.findIndex(x => x.codigo === codigoProducto)
        objectProductosShopping[reult].cantidad = cantidad;
    });
    $$('.enviar').on('click',function () {
        myApp.modal({
            title: 'Enviar Correo',
            text: ``,
            afterText:  '<div class="item-input">\n' +
                '            <input size="35" type="email" id="correo" placeholder="E-mail">\n' +
                '          </div>',
            buttons: [
                {
                    text: 'Aceptar',
                    onClick: function () {
                       console.log($$('#correo').val(),'correo que se va enviar') ;

                    }

                }
            ]
        })


    });
    $$('.eliminar').on('click',function () {
        console.log('eliminar');

        let codigoProducto = parseInt($$(this).data('producto'));
        let reult = objectProductosShopping.findIndex(x => x.codigo === codigoProducto)
        objectProductosShopping.splice(reult, 1)
        console.log('codigo',codigoProducto);
        $$(`#${codigoProducto}`).remove()
    });



})
myApp.onPageInit('emailForm', function (page) {
    // Do something here for "about" page
    //myApp.alert('codigo para chopping');
    $$('.sendMail').on('click',function () {
        myApp.showPreloader('Enviando Correo');
        let dataEmail = '';
        let nombre = $$('#nombre').val();
        let ciudad =  $$('#ciudad').val();
        let observacion = $$('#observacion').val();
        dataEmail+=`Se ha registrado un pedido \nCiudad:${ciudad} \nNombre:${nombre} \nObservación:${observacion}\n`;
        $$.each(objectProductosShopping, function (key, value) {
            dataEmail+=`Codigo: ${value.codigo},Descripcion:${value.descripcion},Costo: ${value.valor},Cantidad: ${value.cantidad} \n`;
        });
        $$.post('https://www.estrategicacomunicaciones.com/mobile/php/send_mail.php', {
            'productos':dataEmail,
            'correo':nombre,
        }, function(response) {
            console.log(response,response == 'true');
            myApp.hidePreloader();
            if(response == 'true'){
                myApp.modal({
                    title: 'Se ha notificado el pedido',
                    text: `Se ha enviado un correo`,
                    buttons: [
                        {
                            text: 'Ok'

                        }
                    ]
                })
            }else{
                myApp.modal({
                    title: 'No e ha notificado el pedido',
                    text: `No se ha enviado un correo, verique los datos ingresados`,
                    buttons: [
                        {
                            text: 'Ok'

                        }
                    ]
                })
            }


        }, 'json');
    })


})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e,page) {
    // Get page data from event data
    var page = e.detail.page;
    if (page.name === 'index') {
        //console.log('ingresa About');
        // Following code will be executed for page with data-page attribute equal to "about"
        $$.each(objectProductos, function (key, value) {
            //console.log(key, value);
            let productoCard = `<div class="card">
                            <div class="card-content">
                                <div class="card-content-inner">
                                    <p style="color: black; font-size: 16px;">
                                        Codigo: ${value.codigo}
                                    </p>
                                    ${value.descripcion}
                                    <div class="list-block">
                                        <br>
                                        <ul>
                                            <li class="item-content">
                                                <div class="item-inner">
                                                    <div class="item-title" style="color: black">Costo: ${value.valor}</div>
                                                    <div class="item-after"><a href="#" class="button active agregar" data-producto=${value.codigo}>Agregar
                                                        Producto</a></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            $$(".content-block2").append(productoCard);

        });
        $$('.agregar').on('click', function () {
            let codigoProducto = parseInt($$(this).data('producto'));
            myApp.modal({
                title: 'Producto Agregado',
                text: `Se ha agregado producto con el codigo:${$$(this).data('producto')}`,
                buttons: [
                    {
                        text: 'Aceptar',
                        onClick: function () {
                            let reult = objectProductos.filter(x => x.codigo === codigoProducto)
                            reult = reult[0]
                            objectProductosShopping.push(
                                {
                                    id: reult.id,
                                    codigo: reult.codigo,
                                    descripcion: reult.descripcion,
                                    valor: reult.valor,
                                    cantidad: 1
                                }
                            );
                        }

                    }
                ]
            })

        })
    }
    if (page.name === 'shoppingCard') {
        // Following code will be executed for page with data-page attribute equal to "about"


    }


})


