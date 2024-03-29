const contracts = { 
    icplazaTest: {
        wrapChainToken: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6',
        iZiSwapFactory: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08',
        liquidityManager: '0x77132b63429718Db2B6ad8D942eE13A198f6Ab49',
        swap: '0x95c5F14106ab4d1dc0cFC9326225287c18c2d247',
    },
    icplaza: {
        wrapChainToken: '0xc59d478873d11CCc68F9c63571E821a253c5B605',
        iZiSwapFactory: '0xCe1E9F846b05Ce9996BA2f55F3EC731c7C1A0fdb',
	liquidityManager: '0x5bD3E57915D8136d5118Fb08C838542A3DE817DC',
	swap: '0xE0c7b10009fC582beFE3cAFE777eC7E2753368aF',
    },
    scrollTestL2: {
        iZiSwapFactory: '0x64c2F1306b4ED3183E7B345158fd01c19C0d8c5E',
        wrapChainToken: '0xa1EA0B2354F5A344110af2b6AD68e75545009a03',
        liquidityManager: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
        swap: '0x77132b63429718Db2B6ad8D942eE13A198f6Ab49',
    },
    bedrockRolluxTestL2: {
        iZiSwapFactory: '0x64c2F1306b4ED3183E7B345158fd01c19C0d8c5E',
        wrapChainToken: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
	liquidityManager: '0xC6C7c2edF70A3245ad6051E93809162B9758ce08',
	swap: '0xa9754f0D9055d14EB0D2d196E4C51d8B2Ee6f4d3',
    },
    mantleTest: {
        iZiSwapFactory: '0xF7713d221418e098a788C4DaDd52F74b55B379E5',
        wrapChainToken: '0x6e1723460D190B4A092a2c13BA42BcC57d71870b',
        liquidityManager: '0x879cd319b8aa506F4130acf766fA8E3654eD249B',
        swap: '0xae3272690D0db0199535EAec1C880283d4baD0cC',
    },
    mantle: {
	iZiSwapFactory: '0x45e5F26451CDB01B0fA1f8582E0aAD9A6F27C218',
        wrapChainToken: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
        liquidityManager: '0x611575eE1fbd4F7915D0eABCC518eD396fF78F0c',
        swap: '0x25C030116Feb2E7BbA054b9de0915E5F51b03e31',
    },
    bscTest: {
        iZiSwapFactory: '0x7fc0574eAe768B109EF38BC32665e6421c52Ee9d',
	liquidityManager: '0xDE02C26c46AC441951951C97c8462cD85b3A124c',
	swap: '0x4bD007912911f3Ee4b4555352b556B08601cE7Ce',
        WETH9: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
        wrapChainToken: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
	    BIT: '0xac360dc0F8EF1C94Ab4034220E0A01567acbFdE4',
	    WBNB: '0xa9754f0D9055d14EB0D2d196E4C51d8B2Ee6f4d3',
	    USDT: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
	    BUSD: '0xd88972676f5D0997c8150A3d2C4634CbaaDD3396',
	    iUSD: '0x60FE1bE62fa2082b0897eA87DF8D2CfD45185D30',
        SLD: '0x45F76eD56082cd0B0A0Ad1E4513214d1219f9998',
        DUET: '0x5D111A3573838f6A24B4b64dbE6A234bE1e6d822',
        dWTI: '0x967b61E062205C2DcbB6146b383119A8827493C3',
        DUSD: '0x5682fBb54565b02a4E72Ce29C5a9B61Dee8a0819',
        USDT18: '0x3eC84d8bDD27Db0FD49462187b0bd8E347bBc1e7',
        KSW: '0xe377BA982D52C598568cE37dd146ced237FFd938',
        REVO: '0x1e19F04008f57344D589494C50Ff8138aD5207Ae',
        LAND: '0x1017D7d37169f98EED32BBB68aD79A3881174e3f',
        FROYO: '0xed2F92D6D2b936ce3Db9e046E57D9119e4A31ECb',
    },
    opBNBTest: {
        iZiSwapFactory: '0x64c2F1306b4ED3183E7B345158fd01c19C0d8c5E',
        wrapChainToken: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
	liquidityManager: '0x1eE5eDC5Fe498a2dD82862746D674DB2a5e7fef6',
	swap: '0xF6FFe4f3FdC8BBb7F70FFD48e61f17D1e343dDfD',
    },
    ontologyTest: {
        iZiSwapFactory: '0x64c2F1306b4ED3183E7B345158fd01c19C0d8c5E',
        wrapChainToken: '0xe8cf015f797877a9a23e80447429c0b0f04e114b',
        liquidityManager: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
        swap: '0x77132b63429718Db2B6ad8D942eE13A198f6Ab49',
    },
    bsc: {
        iZiSwapFactory: '0xd7de110Bd452AAB96608ac3750c3730A17993DE0',
        WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	wrapChainToken: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	liquidityManager: '0x93C22Fbeff4448F2fb6e432579b0638838Ff9581',
	swap: '0xBd3bd95529e0784aD973FD14928eEDF3678cfad8',
    },
    ontology: {
        iZiSwapFactory: '0x8c7d3063579BdB0b90997e18A770eaE32E1eBb08',
        wrapChainToken: '0xd8bc24cfd45452ef2c8bc7618e32330b61f2691b',
        liquidityManager: '0x110dE362cc436D7f54210f96b8C7652C2617887D',
        swap: '0x02F55D53DcE23B4AA962CC68b0f685f26143Bdb2',
    },
    ethereum: {
        wrapChainToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        iZiSwapFactory: '0x1502d025BfA624469892289D45C0352997251728',
        liquidityManager: '0x19b683A2F45012318d9B2aE1280d68d3eC54D663',
        swap: '0x2db0AFD0045F3518c77eC6591a542e326Befd3D7',
    },
    aurora: {
        iZiSwapFactory: '0x156d8a0bE25FA232bb637Fc76255bCd00dEae9E9',
        WETH: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
        wrapChainToken: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
        liquidityManager: '0xE78e7447223aaED59301b44513D1d3A892ECF212',
        swap: '0x96539F87cA176c9f6180d65Bc4c10fca264aE4A5',
    },
    auroraTest: {
	iZiSwapFactory: '0x64c2F1306b4ED3183E7B345158fd01c19C0d8c5E',
	WETH: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
    },
    arbitrum: {
        iZiSwapFactory: '0x45e5F26451CDB01B0fA1f8582E0aAD9A6F27C218',
        WETH: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        wrapChainToken: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        liquidityManager: '0x611575eE1fbd4F7915D0eABCC518eD396fF78F0c',
        swap: '0x1CB60033F61e4fc171c963f0d2d3F63Ece24319c',
    },
    cronos: {
        iZiSwapFactory: '0x3EF68D3f7664b2805D4E88381b64868a56f88bC4',
        WETH: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
        wrapChainToken: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
        liquidityManager: '0x33531bDBFE34fa6Fd5963D0423f7699775AacaaF',
        swap: '0x04830cfCED9772b8ACbAF76Cfc7A630Ad82c9148',
    },
    etc: {
        iZiSwapFactory: '0x25C030116Feb2E7BbA054b9de0915E5F51b03e31',
        wrapChainToken: '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a',
        liquidityManager: '0x1D377311b342633A970e71a787C50F83858BFC1B',
        swap: '0xe6805638db944eA605e774e72c6F0D15Fb6a1347',
    },
    polygon: {
        iZiSwapFactory: '0x3EF68D3f7664b2805D4E88381b64868a56f88bC4',
        wrapChainToken: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        liquidityManager: '0x33531bDBFE34fa6Fd5963D0423f7699775AacaaF',
        swap: '0x3F559139C2Fc7B97Ad6FE9B4d1f75149F551DB18',
    },
    meter: {
        iZiSwapFactory: '0x3aaacE835Db7Be1C7E0C4117dBc91c265D7f2D28',
        wrapChainToken: '0x160361ce13ec33C993b5cCA8f62B6864943eb083',
        liquidityManager: '0x07aBf894D5C25E626bb30f75eFC728a1d86BEeDC',
        swap: '0x6960A7151d3310804aFA9CaD2c7415f9564BE03e',
    },
    telos: {
        iZiSwapFactory: '0x8c7d3063579BdB0b90997e18A770eaE32E1eBb08',
        wrapChainToken: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
        liquidityManager: '0x110dE362cc436D7f54210f96b8C7652C2617887D',
        swap: '0x2db0AFD0045F3518c77eC6591a542e326Befd3D7',
    },
    ultron: {
        iZiSwapFactory: '0x8c7d3063579BdB0b90997e18A770eaE32E1eBb08',
        wrapChainToken: '0xb1183357745D3fD7d291E42a2c4B478cdB5710c6',
        liquidityManager: '0xcA7e21764CD8f7c1Ec40e651E25Da68AeD096037',
        swap: '0x1D377311b342633A970e71a787C50F83858BFC1B',
    },
    lineaTest: {
        iZiSwapFactory: '0x64c2F1306b4ED3183E7B345158fd01c19C0d8c5E',
        wrapChainToken: '0x2c1b868d6596a18e32e61b901e4060c872647b6c',
        liquidityManager: '',
        swap: '',
    },
    linea: {
        iZiSwapFactory: '0x8c7d3063579BdB0b90997e18A770eaE32E1eBb08',
        wrapChainToken: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
        liquidityManager: '0x110dE362cc436D7f54210f96b8C7652C2617887D',
        swap: '0x02F55D53DcE23B4AA962CC68b0f685f26143Bdb2',
    },
    opsideTestRollux: {
	iZiSwapFactory: '0x58ce24c6cDC0d5A2c3BcA1e179E869AF97266829',
	wrapChainToken: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
	liquidityManager: '0xa341a31CCdD570cAEab465c96D64c880db609021',
	swap: '0x2A19e0CF8c73280CdDdFd5877AA64A9690AE6d47',
    },
}

module.exports = contracts;
