// Initialize app
var myApp = new Framework7();
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
    {codigo: 199, id: 232, descripcion: '	GLOWSTEN, BRILLA-METAL M   Garrafa	 ', valor: 66017}];
var objectProductosShopping = [];

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
    $$.each(objectProductos, function (key, value) {
        console.log(key, value);
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

        $$(".content-block").append(productoCard);

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
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('shoppingCard', function (page) {
    // Do something here for "about" page
    //myApp.alert('codigo para chopping');
    $$.each(objectProductosShopping, function (key, value) {
        console.log(key, value);
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
                                                    <div class="buttons-row">
                                                      
                                                      <a class="tab-link  button less" data-codigo="${value.codigo}" style="text-overflow: clip; color: black">-</a>
                                                      
                                                      <a class="tab-link active button" id="stock${value.codigo}" style="text-overflow: clip; id="cantidad${value.codigo}">1</a>
                                                  
                                                      <a  class="tab-link button more" data-codigo="${value.codigo}" style="text-overflow: clip; color: black"">+</a>
                                                    </div>
                                                    <div class="item-after"><a href="#" class="button active agregar" data-producto=${value.codigo}><i class="f7-icons" style="color: white; font-size: 13px;">trash_fill</i></a></div>
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


    });
    $$('.more').on('click',function () {
        let cantidad = parseInt($$("#stock"+($$(this).data('codigo') )).text()) ;
        cantidad += 1;
        $$("#stock"+($$(this).data('codigo') )).text(cantidad);
        console.log($$(this).data('codigo'),'mas');
    });
    $$('.enviar').on('click',function () {
        myApp.modal({
            title: 'Enviar Correo',
            text: ``,
            afterText:  '<div class="item-input">\n' +
                '            <input size="35" type="email" id="correo" placeholder="E-mail">\n' +
                '          </div>' +
                '<div class="item-content">\n' +
                '        <div class="item-media"><i class="icon f7-icons">email</i></div>\n' +
                '        <div class="item-inner">\n' +
                '          <div class="item-title label">E-mail</div>\n' +
                '          <div class="item-input">\n' +
                '            <input type="email" placeholder="E-mail">\n' +
                '          </div>\n' +
                '        </div>\n' +
                '      </div>',
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

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        console.log('ingresa About');
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
    if (page.name === 'shoppingCard') {
        // Following code will be executed for page with data-page attribute equal to "about"


    }

})


