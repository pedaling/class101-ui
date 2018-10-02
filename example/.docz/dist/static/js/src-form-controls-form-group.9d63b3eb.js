(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/formControls/FormGroup.mdx":function(A,e,o){"use strict";o.r(e);var r=o("./node_modules/react/index.js"),l=o.n(r),a=o("./node_modules/@mdx-js/tag/dist/index.js"),n=o("./node_modules/docz/dist/index.m.js"),t=o("../dist/index.es.js");function g(A,e){if(null==A)return{};var o,r,l=function(A,e){if(null==A)return{};var o,r,l={},a=Object.keys(A);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(l[o]=A[o]);return l}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(l[o]=A[o])}return l}var E=function(A){var e=A.labelColor,o=void 0===e?t.i.gray800:e,r=A.inline,a=void 0!==r&&r,n=g(A,["labelColor","inline"]);return l.a.createElement(t.k,Object.assign({labelColor:o,inline:a},n))},i=E;function B(A,e){if(null==A)return{};var o,r,l=function(A,e){if(null==A)return{};var o,r,l={},a=Object.keys(A);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(l[o]=A[o]);return l}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(l[o]=A[o])}return l}E.__docgenInfo={description:"",methods:[],displayName:"Component",props:{labelColor:{defaultValue:{value:"Colors.gray800",computed:!0},required:!1,flowType:{name:"string"},description:"\uadf8\ub8f9\uba85\uc758 \uc0c9\uc0c1"},inline:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"\uac00\ub85c\ub85c \uc815\ub82c"},label:{required:!0,flowType:{name:"string"},description:"\uadf8\ub8f9\uba85"},children:{required:!0,flowType:{name:"Node"},description:""}}};e.default=function(A){var e=A.components,o=B(A,["components"]);return l.a.createElement(a.MDXTag,{name:"wrapper",components:e},l.a.createElement(a.MDXTag,{name:"h1",components:e,props:{id:"form-group"}},"Form Group"),l.a.createElement(a.MDXTag,{name:"p",components:e},"\uac01\uc885 \ucee8\ud2b8\ub864\ub7ec\ub4e4\uc744 \ud55c \ud3fc\uc73c\ub85c \ubb36\uc5b4\uc90d\ub2c8\ub2e4."),l.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"props"}},"Props"),l.a.createElement(n.PropsTable,{of:i}),l.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"basic-usage"}},"Basic usage"),l.a.createElement(n.Playground,{__position:1,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmARpUBmcJ2HkN0TXacgoH8OAAEYAAZMItUIIEDAV7SmAAxYUiAAcSEUIZmQuV2k9OABHISQwAoxwaCEKA4EkciBComiZiIqD2BDKV6NNLVAzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudpsPYVMZiwdpDzrGZuxYedDIAFjM9gADYzIs9Z2JoUifWgRJDP4ZxDkRR1MHYAAFIR-CWIhqEoOBrMRdy608ghnAgRTLnYTD7Ms-RVSDVA5KmABBOYNPYaMYPIGwoHQSNEM5DSxAquMZHYVE1JgbhgGPZTVOxeRd3rYBqugOrggAMgm8ZEnmShmlG2r6u4Fb5TAUJCr7VB2nYAB-DYxsjaNGquRbxtQeQ433WQzE_MxYQ1Y4YDAMIoCmY6mpautGFKtc62TfjBLaOj0MCKA-BAAAZVwwfEddkwaOCEPJSUYGGWqMghsL0MRdHZ3GbBRBAdgd3XKRAeo4GhqkX7a05X8QGY1j2IEzi0UoHi-IoynaKArAyB0UD9EMSR2AAATAKBRjtR7xOld0FXNESSK09gKaEpZHClgQ7CQ40GLQjCcLwgiZJoWbugiygR007S62MIx2EAD9rAE-OwBQrvYXl1lBpcrlROcUks9YHed93AA1x9hAEmBwBBgc9vk6x9qAteFXa_bRAog_tkx2EAABrAB0OvP2EAVAnABoOuP1jQKA0BgVP2C8DmJVQTOLDOyMrgAOVLXL8tk6h5M3ahXU0yrvZhpdk6OTSJ7gc9MkSAAObDsMsixK-r8qXp4mAV_YHA966VErbuMx5CuI-4Ea7hmtjb71eB9dE4n7r2EfjnhUQ9c15dZ-v-6S7_tVnvCM8ACDnw_vbOmPcXRYBVpgF6oQ3qOizPofKDMErbFcGkIC1ABa6DAgYCCdsLD8FQD6JkSB2D8CBMSKo3gMgWn_OSchO9-CsAyPkag_Arj8GwjgXh2EorrH4OUcg_QZhbS4ZQkAxV2rEVgDCLAPomFPXJJQRIBY8gFGnFqC01CQR0IEIIus_AohoEkfwVQ2AgJGOISATA8woyFQgPASRRD6xUPQnALCuF8IQHMSAKuqBtiID3jY9xggtT-IAHqYWcjgAArDgAATGE2xZopRWkiNE2JCTkn8HWP_eQDMaHVA-NQSAKRsGoFwULcCIBtIgFoL6LIXCqFmloBadJlpZgzH4EU-QAygA",__code:'<FormGroup label="Label">\n  <Input placeholder="Placeholder text" />\n</FormGroup>',__scope:{props:o,Input:t.p,FormGroup:i}},l.a.createElement(i,{label:"Label"},l.a.createElement(t.p,{placeholder:"Placeholder text"}))),l.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"with-different-label-colors"}},"With different label colors"),l.a.createElement(n.Playground,{__position:2,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmARpUBmcJ2HkN0TXacgoH8OAAEYAAZMItUIIEDAV7SmAAxYUiAAcSEUIZmQuV2k9OABHISQwAoxwaCEKA4EkciBComiZiIqD2BDKV6NNLVAzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudpsPYVMZiwdpDzrGZuxYedDIAFjM9gADYzIs9Z2JoUifWgRJDP4ZxDkRR1MHYAAFIR-CWIhqEoOBrMRdy608ghnAgRTLnYTD7Ms-RVSDVA5KmABBOYNPYaMYPIGwoHQSNEM5DSxAquMZHYVE1JgbhgGPZTVOxeRd3rYBqugOrggAMgm8ZEnmShmlG2r6u4Fb5TAUJCr7VB2nYAB-DYxsjaNGquRbxtQeQ433WQzE_MxYQ1Y4YDAMIoCmY6mpautGFKtc62TfjBLaOj0MCKA-BAAAZVwwf4dhQaXRwoGFCGUkyRJxHXZMGjghDyUlGBhlqjIIbC9DESJ2dxmwUQQHYHd1ykQHqOBoaAYolnaPhmGlwh6HYbphGoCRlH-BmNBtkx_760YHH4KmfGKcoYmBFJ8nCeVqnaCwWn6bZhs-I5oShqkX7a05X8QGY1j2IEzi0WV3jmaEoCsDIHRQP0QxJHYAABMBkZGO1HvE6V3QVc0RJIrT2Gd4GlhFgQ7CQ40GLQjCcLwgiZJoWbugiygR007S62MIx2EAD9rAE-OwBQrvYXl1iFq5UTnFJLPWMvK9rwANcfYQBJgcAQYH675OshcT3bm7RAp29Lkx2EAABrAB0Oxf2EAVAnABoO4f1jQKA0BgCf2C8ZWJVQGeLDOyMrgAOVLXL8tk6h5M3ahXU0yrG554XleFcrE7gc90YAA5sLYUshYHee9yovR4jAMB7AcAIK6KiAudwzDyCuCguAjVuDNVjN9OOtF1xj2_qrGCxDkZHEutLCBLpuqcFQLvF0iF1wwQQRGeABBMHMNLube-LosDR0wC9UIb1HRZn0PlS2CVtiuDSEBag7tdBgQMBBEuFh-CoB9EyJA7B-BAmJFUbwGQLT_nJNouB_BWAZHyNQfgVx-DYRwI47CUV1j8HKOQfoMwtp2N0SAYq7ViKwBhFgH0ZinrkkoIkAseQCjTi1BafRIIjECFcXWfgUQ0C-P4KobAQE0nqJAJgeYUZCoQHgL4tR9Y9HoTgFhXC-EIDZJAIw7YiAEEFOqYILUzSAB6mFnI4AAKw4AAEydMKWaKUVpIh9IGcMsZ_B1hUPkJbAx1QPjUEgCkeRqBFGe3AiAbSIBaC-iyHYvRZpaAWimZaWYMx-CrPkM8oAA",__code:'<FormGroup label="Label" labelColor="gray">\n  <Input placeholder="Placeholder text" />\n</FormGroup>\n<FormGroup label="Label" labelColor="pink">\n  <Input placeholder="Placeholder text" />\n</FormGroup>',__scope:{props:o,Input:t.p,FormGroup:i}},l.a.createElement(i,{label:"Label",labelColor:"gray"},l.a.createElement(t.p,{placeholder:"Placeholder text"})),l.a.createElement(i,{label:"Label",labelColor:"pink"},l.a.createElement(t.p,{placeholder:"Placeholder text"}))),l.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"inline-form-group"}},"Inline form group"),l.a.createElement(n.Playground,{__position:3,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmARpUBmcJ2HkN0TXacgoH8OAAEYAAZMItUIIEDAV7SmAAxYUiAAcSEUIZmQuV2k9OABHISQwAoxwaCEKA4EkciBComiZiIqD2BDKV6NNLVAzMXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudpsPYVMZiwdpDzrGZuxYedDIAFjM9gADYzIs9Z2JoUifWgRJDP4ZxDkRR1MHYAAFIR-CWIhqEoOBrMRdy608ghnAgRTLnYTD7Ms-RVSDVA5KmABBOYNPYaMYPIGwoHQSNEM5DSxAquMZHYVE1JgbhgGPZTVOxeRd3rYBqugOrggAMgm8ZEnmShmlG2r6u4Fb5TAUJCr7VB2nYAB-DYxsjaNGquRbxtQeQ433WQzE_MxYQ1Y4YDAMIoCmY6mpautGFKtc62TfjBLaOj0MCKA-BAAAZVwwf4ThUCgNAYCG-sGwaOCEPJSUYGGWqMghsL0MRXHZ3GbBRBAdgd3XKRAeo4GhqkX7a05X8QGY1j2IEzi0UoHi-Io-naKArAyB0UD9EMSR2AAATAKBRjtR7xOld0FXNESSK09g6aEpZHAVgQ7CQ40GLQjCcLwgiZJoWbugiygR007S62MIx2EAD9rAE-OwBQrvYXl1lBpcrlROcUks9Y3c933AA1x9hAEmBwBBgf9vk6yDqADeFXaQ7RAoI9dkx2EAABrAB0Okv2EAVAnABoOlP1jQRGXWz9gvD5iVUHziwzsjK4ADlS1y_LZOoeTN2oV1NMqwOYaXTOjk02e4HPTJEgADmw7DLIseukfKl6eJgTf2BwY-ulRB27jMeQrnPuBGu4ZrY2-3XgfXdPZ-69g3754VEPXbeXQ_v_bol1_ra2PhGeABAb6_1dizQeLosBa0wC9UIb1HRZn0PlNmCVtiuDSEBagYtdBgQMBBF2Fh-CoB9EyJA7B-BAmJFUbwGQLT_nJDQw-_BWAZHyNQfgVx-DYRwEI7CUV1j8HKOQfoMwtr8LoSAYq7ViKwBhFgH07CnrkkoIkAseQCjTi1BaBhIJmECDEXWfgUQ0ByP4KobAQFzEUJAJgeYUZCoQHgHI8h9Z6HoTgFhXC-EIA2JAA3bYiBj6OJ8YILUISAB6mFnI4AAKw4AAExRKcWaKUVpIjxMSSk9J_B1ggPkGzRh1QPjUEgCkAhqAiES3AiAbSIBaC-iyPw-hZpaAWmyZaWYMx-BlPkCMoAA",__code:'<FormGroup label="Label" inline>\n  <Input placeholder="Placeholder text" />\n</FormGroup>',__scope:{props:o,Input:t.p,FormGroup:i}},l.a.createElement(i,{label:"Label",inline:!0},l.a.createElement(t.p,{placeholder:"Placeholder text"}))))}}}]);