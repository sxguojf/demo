import{M as v,p as h,C as c,a as S,b as Ae,P as Ne,V as qe,d as je,r as y,o as C,c as T,e as I,f as U,w as M,u as Ve,m as $e,F as G,g as H,T as P,h as Oe,i as D,j as Ye,t as Xe,k,l as R,n as Ke,s as Ze,_ as Je}from"./main-Cq_jLCd9.js";class A extends v{get brightness(){return this._uniforms.uBrightness.value}set brightness(e){this._uniforms.uBrightness.value=e}get contrast(){return this._uniforms.uContrast.value}set contrast(e){this._uniforms.uContrast.value=e}get gamma(){return this._uniforms.uGamma.value}set gamma(e){this._uniforms.uGamma.value=e}get saturation(){return this._uniforms.uSaturation.value}set saturation(e){this._uniforms.uSaturation.value=e}get hue(){return this._uniforms.uHue.value}set hue(e){this._uniforms.uHue.value=e}constructor(e){const{brightness:a=1,contrast:n=1,gamma:r=1,saturation:i=1,hue:o=0,...s}=e??{};super({transparent:!0,...s}),this._uniforms={uBrightness:{value:a},uContrast:{value:n},uGamma:{value:r},uSaturation:{value:i},uHue:{value:o}},this.onBeforeCompile=l=>{l.uniforms.uBrightness=this._uniforms.uBrightness,l.uniforms.uContrast=this._uniforms.uContrast,l.uniforms.uGamma=this._uniforms.uGamma,l.uniforms.uSaturation=this._uniforms.uSaturation,l.uniforms.uHue=this._uniforms.uHue,l.fragmentShader=l.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uBrightness;
					uniform float uContrast;
					uniform float uGamma;
					uniform float uSaturation;
					uniform float uHue;
				`),l.fragmentShader=l.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = gl_FragColor.rgb;

					// brightness
					color *= uBrightness;

					// contrast
					color = (color - 0.5) * uContrast + 0.5;

					// gamma
					color = pow( max( color, vec3( 0.0 ) ), vec3( 1.0 / uGamma ) );

					// saturation
					float lum = dot( color, vec3( 0.2126, 0.7152, 0.0722 ) );
					color = mix( vec3( lum ), color, uSaturation );

					// hue rotation (RGB rotation matrix)
					float cosH = cos( uHue );
					float sinH = sin( uHue );
					mat3 hueRot = mat3(
						0.299 + 0.701 * cosH + 0.168 * sinH, 0.587 - 0.587 * cosH + 0.330 * sinH, 0.114 - 0.114 * cosH - 0.497 * sinH,
						0.299 - 0.299 * cosH - 0.328 * sinH, 0.587 + 0.413 * cosH + 0.035 * sinH, 0.114 - 0.114 * cosH + 0.292 * sinH,
						0.299 - 0.299 * cosH + 1.250 * sinH, 0.587 - 0.587 * cosH - 1.050 * sinH, 0.114 + 0.886 * cosH - 0.203 * sinH
					);
					color = hueRot * color;

				gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class N extends v{get amount(){return this._uniforms.uAmount.value}set amount(e){this._uniforms.uAmount.value=e}get radius(){return this._uniforms.uRadius.value}set radius(e){this._uniforms.uRadius.value=e}constructor(e){const{amount:a=.5,radius:n=1,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uAmount:{value:a},uRadius:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uAmount=this._uniforms.uAmount,i.uniforms.uRadius=this._uniforms.uRadius,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uAmount;
					uniform float uRadius;
				`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
				vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 ) * uRadius;

				// 3x3 Gaussian blur (unrolled)
				vec3 blur = vec3( 0.0 );
				blur += 1.0 * texture2D( map, vMapUv + vec2( -ts.x, -ts.y ) ).rgb;
				blur += 2.0 * texture2D( map, vMapUv + vec2( 0.0, -ts.y ) ).rgb;
				blur += 1.0 * texture2D( map, vMapUv + vec2(  ts.x, -ts.y ) ).rgb;
				blur += 2.0 * texture2D( map, vMapUv + vec2( -ts.x, 0.0 ) ).rgb;
				blur += 4.0 * texture2D( map, vMapUv + vec2( 0.0, 0.0 ) ).rgb;
				blur += 2.0 * texture2D( map, vMapUv + vec2(  ts.x, 0.0 ) ).rgb;
				blur += 1.0 * texture2D( map, vMapUv + vec2( -ts.x, ts.y ) ).rgb;
				blur += 2.0 * texture2D( map, vMapUv + vec2( 0.0, ts.y ) ).rgb;
				blur += 1.0 * texture2D( map, vMapUv + vec2(  ts.x, ts.y ) ).rgb;
				blur /= 16.0;

				// unsharp mask: 原图 + amount * (原图 - 模糊)
				gl_FragColor.rgb = clamp( gl_FragColor.rgb + uAmount * ( gl_FragColor.rgb - blur ), 0.0, 1.0 );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class q extends v{get strength(){return this._uniforms.uStrength.value}set strength(e){this._uniforms.uStrength.value=e}get threshold(){return this._uniforms.uThreshold.value}set threshold(e){this._uniforms.uThreshold.value=e}constructor(e){const{strength:a=.5,threshold:n=.1,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uStrength:{value:a},uThreshold:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uStrength=this._uniforms.uStrength,i.uniforms.uThreshold=this._uniforms.uThreshold,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uStrength;
					uniform float uThreshold;
				`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = gl_FragColor.rgb;
				vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );

					// smoothstep 将强度从 linear 转为更自然的去雾效果
					float strength = smoothstep( 0.0, 1.0, uStrength );

				// 暗通道：当前像素 RGB 最小值
				float dark = min( color.r, min( color.g, color.b ) );

					// 3x3 局部最小值（暗通道先验）
					float minDark = 1.0;
					for ( int y = -1; y <= 1; y++ ) {
						for ( int x = -1; x <= 1; x++ ) {
					vec3 s = texture2D( map, vMapUv + vec2( float( x ), float( y ) ) * ts ).rgb;
					minDark = min( minDark, min( s.r, min( s.g, s.b ) ) );
				}
			}

			// 大气光估计（取当前像素亮度最高的通道）
			float A = max( color.r, max( color.g, color.b ) );

			// 透射率：t = 1 - omega * minDark
			float omega = 0.95 * strength;
			float t = 1.0 - omega * minDark;
			t = max( t, uThreshold );

			// 去雾恢复
			vec3 dehazed = ( color - A * ( 1.0 - t ) ) / t;

			gl_FragColor.rgb = clamp( dehazed, 0.0, 1.0 );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class j extends v{get shadows(){return this._uniforms.uShadows.value}set shadows(e){this._uniforms.uShadows.value=e}get midtones(){return this._uniforms.uMidtones.value}set midtones(e){this._uniforms.uMidtones.value=e}get highlights(){return this._uniforms.uHighlights.value}set highlights(e){this._uniforms.uHighlights.value=e}constructor(e){const{shadows:a=new c(1,1,1),midtones:n=new c(1,1,1),highlights:r=new c(1,1,1),...i}=e??{};super({transparent:!0,...i}),this._uniforms={uShadows:{value:a},uMidtones:{value:n},uHighlights:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uShadows=this._uniforms.uShadows,o.uniforms.uMidtones=this._uniforms.uMidtones,o.uniforms.uHighlights=this._uniforms.uHighlights,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform vec3 uShadows;
					uniform vec3 uMidtones;
					uniform vec3 uHighlights;
				`),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					// 亮度分离阴影/中间调/高亮权重
					float lum = dot( color, vec3( 0.2126, 0.7152, 0.0722 ) );
					float shadowsW = 1.0 - smoothstep( 0.0, 0.5, lum );
					float highlightsW = smoothstep( 0.5, 1.0, lum );
					float midtonesW = 1.0 - shadowsW - highlightsW;

					// 三区独立色彩偏移
					color *= uShadows * shadowsW + uMidtones * midtonesW + uHighlights * highlightsW;

					gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}function L(f="vMapUv",e="ts",a="vec2(0.0)"){return`
		// Sobel 梯度（8 采样）
		vec2 _su = ${f} + ${a};
		float _tl = dot( texture2D( map, _su + vec2( -${e}.x, -${e}.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		float _t  = dot( texture2D( map, _su + vec2(  0.0,      -${e}.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		float _tr = dot( texture2D( map, _su + vec2(  ${e}.x, -${e}.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		float _l  = dot( texture2D( map, _su + vec2( -${e}.x,  0.0      ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		float _r  = dot( texture2D( map, _su + vec2(  ${e}.x,  0.0      ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		float _bl = dot( texture2D( map, _su + vec2( -${e}.x,  ${e}.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		float _b  = dot( texture2D( map, _su + vec2(  0.0,       ${e}.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		float _br = dot( texture2D( map, _su + vec2(  ${e}.x,  ${e}.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
		vec2 sobelGrad = vec2(
			-_tl - 2.0 * _l - _bl + _tr + 2.0 * _r + _br,
			-_tl - 2.0 * _t - _tr + _bl + 2.0 * _b + _br
		);
	`}function B(f="vMapUv",e="ts",a="vec2(0.0)"){return L(f,e,a)+`
		float sobelEdge = length( sobelGrad );
	`}class V extends v{get threshold(){return this._uniforms.uThreshold.value}set threshold(e){this._uniforms.uThreshold.value=e}get edgeColor(){return this._uniforms.uEdgeColor.value}set edgeColor(e){this._uniforms.uEdgeColor.value=e}get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}constructor(e){const{threshold:a=.15,edgeColor:n=new c(0,0,0),blend:r=.7,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uThreshold:{value:a},uEdgeColor:{value:n},uBlend:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uThreshold=this._uniforms.uThreshold,o.uniforms.uEdgeColor=this._uniforms.uEdgeColor,o.uniforms.uBlend=this._uniforms.uBlend,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uThreshold;
					uniform vec3 uEdgeColor;
					uniform float uBlend;
				`),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = gl_FragColor.rgb;
				vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );
				${B()}
				float edgeStrength = smoothstep( uThreshold * 0.5, uThreshold, sobelEdge );

				gl_FragColor.rgb = mix( color, uEdgeColor, edgeStrength * uBlend );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class $ extends v{get levels(){return this._uniforms.uLevels.value}set levels(e){this._uniforms.uLevels.value=e}constructor(e){const{levels:a=6,...n}=e??{};super({transparent:!0,...n}),this._uniforms={uLevels:{value:a}},this.onBeforeCompile=r=>{r.uniforms.uLevels=this._uniforms.uLevels,r.fragmentShader=r.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uLevels;
				`),r.fragmentShader=r.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = floor( gl_FragColor.rgb * uLevels + 0.5 ) / max( uLevels - 1.0, 1.0 );
				gl_FragColor.rgb = color;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class O extends v{get sunElevation(){return this._uniforms.uSunElevation.value}set sunElevation(e){this._uniforms.uSunElevation.value=e}get sunAzimuth(){return this._uniforms.uSunAzimuth.value}set sunAzimuth(e){this._uniforms.uSunAzimuth.value=e}get shadeStrength(){return this._uniforms.uShadeStrength.value}set shadeStrength(e){this._uniforms.uShadeStrength.value=e}get textureBlend(){return this._uniforms.uTextureBlend.value}set textureBlend(e){this._uniforms.uTextureBlend.value=e}constructor(e){const{sunElevation:a=.7,sunAzimuth:n=2.5,shadeStrength:r=.6,textureBlend:i=.8,...o}=e??{};super({transparent:!0,...o}),this._uniforms={uSunElevation:{value:a},uSunAzimuth:{value:n},uShadeStrength:{value:r},uTextureBlend:{value:i}},this.onBeforeCompile=s=>{s.uniforms.uSunElevation=this._uniforms.uSunElevation,s.uniforms.uSunAzimuth=this._uniforms.uSunAzimuth,s.uniforms.uShadeStrength=this._uniforms.uShadeStrength,s.uniforms.uTextureBlend=this._uniforms.uTextureBlend,s.fragmentShader=s.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform float uSunElevation;
          uniform float uSunAzimuth;
          uniform float uShadeStrength;
          uniform float uTextureBlend;
        `),s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;

          // 太阳方向 Z-up（瓦片局部）→ Y-up（Three.js 世界）
          float sinEl = sin( uSunElevation );
          float cosEl = cos( uSunElevation );
          vec3 sunDirWorld = normalize( vec3(
            cosEl * sin( uSunAzimuth ),
            sinEl,
            -cosEl * cos( uSunAzimuth )
          ) );
          vec3 sunDir = ( viewMatrix * vec4( sunDirWorld, 0.0 ) ).xyz;

          vec3 N = normalize( vNormal );

          // Hillshade
          float shade = dot( N, sunDir );
          shade = clamp( shade * 0.5 + 0.5, 0.0, 1.0 );
          shade = mix( 1.0, shade, uShadeStrength );

          // 混合纹理
          vec3 blendedColor = mix( color, color * shade, uTextureBlend );

          gl_FragColor.rgb = blendedColor;
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class Qe extends v{get blackIn(){return this._uniforms.uBlackIn.value}set blackIn(e){this._uniforms.uBlackIn.value=e}get whiteIn(){return this._uniforms.uWhiteIn.value}set whiteIn(e){this._uniforms.uWhiteIn.value=e}get gamma(){return this._uniforms.uGamma.value}set gamma(e){this._uniforms.uGamma.value=e}constructor(e){const{blackIn:a=[0,0,0],whiteIn:n=[1,1,1],gamma:r=[1,1,1],...i}=e??{};super({transparent:!0,...i}),this._uniforms={uBlackIn:{value:a},uWhiteIn:{value:n},uGamma:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uBlackIn=this._uniforms.uBlackIn,o.uniforms.uWhiteIn=this._uniforms.uWhiteIn,o.uniforms.uGamma=this._uniforms.uGamma,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform vec3 uBlackIn;
          uniform vec3 uWhiteIn;
          uniform vec3 uGamma;
        `),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;

          // 黑场/白场映射
          color = ( color - uBlackIn ) / max( uWhiteIn - uBlackIn, 1e-6 );
          // 伽马校正
          color = pow( max( color, 0.0 ), 1.0 / max( uGamma, vec3( 1e-6 ) ) );

          gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class Y extends v{get shadows(){return this._uniforms.uShadows.value}set shadows(e){this._uniforms.uShadows.value=e}get highlights(){return this._uniforms.uHighlights.value}set highlights(e){this._uniforms.uHighlights.value=e}get balance(){return this._uniforms.uBalance.value}set balance(e){this._uniforms.uBalance.value=e}constructor(e){const{shadows:a=new c(.1,.15,.3),highlights:n=new c(1,.85,.6),balance:r=0,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uShadows:{value:a},uHighlights:{value:n},uBalance:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uShadows=this._uniforms.uShadows,o.uniforms.uHighlights=this._uniforms.uHighlights,o.uniforms.uBalance=this._uniforms.uBalance,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform vec3 uShadows;
          uniform vec3 uHighlights;
          uniform float uBalance;
        `),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;

          float lum = dot( color, vec3( 0.2126, 0.7152, 0.0722 ) );
          float split = 0.5 + uBalance * 0.4;
          float shadowsW = 1.0 - smoothstep( 0.0, split, lum );
          float highlightsW = smoothstep( split, 1.0, lum );

          color *= 1.0 + uShadows * shadowsW + uHighlights * highlightsW;

          gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class et extends v{get matrix(){return this._uniforms.uMatrix.value}set matrix(e){this._uniforms.uMatrix.value=e}get monochrome(){return this._uniforms.uMonochrome.value>.5}set monochrome(e){this._uniforms.uMonochrome.value=e?1:0}get weights(){return this._uniforms.uWeights.value}set weights(e){this._uniforms.uWeights.value=e}constructor(e){const{matrix:a=[1,0,0,0,1,0,0,0,1],monochrome:n=!1,weights:r=[.299,.587,.114],...i}=e??{};super({transparent:!0,...i}),this._uniforms={uMatrix:{value:a},uMonochrome:{value:n?1:0},uWeights:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uMatrix=this._uniforms.uMatrix,o.uniforms.uMonochrome=this._uniforms.uMonochrome,o.uniforms.uWeights=this._uniforms.uWeights,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform mat3 uMatrix;
          uniform float uMonochrome;
          uniform vec3 uWeights;
        `),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;

          // 通道混合
          color = uMatrix * color;

          // 单色模式
          float gray = dot( color, uWeights );
          color = mix( color, vec3( gray ), uMonochrome );

          gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class X extends v{get sigmaSpatial(){return this._uniforms.uSigmaSpatial.value}set sigmaSpatial(e){this._uniforms.uSigmaSpatial.value=e}get sigmaRange(){return this._uniforms.uSigmaRange.value}set sigmaRange(e){this._uniforms.uSigmaRange.value=e}constructor(e){const{sigmaSpatial:a=1.5,sigmaRange:n=.25,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uSigmaSpatial:{value:a},uSigmaRange:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uSigmaSpatial=this._uniforms.uSigmaSpatial,i.uniforms.uSigmaRange=this._uniforms.uSigmaRange,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform float uSigmaSpatial;
          uniform float uSigmaRange;
        `),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 center = gl_FragColor.rgb;
          vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 ) * max( uSigmaSpatial, 0.01 );
          vec3 sum = vec3( 0.0 );
          float totalWeight = 0.0;

          // 5×5 双边滤波
          float sigmaS = uSigmaSpatial;
          float sigmaR = max( uSigmaRange, 1.0e-4 );

          for ( int y = -2; y <= 2; y++ ) {
            for ( int x = -2; x <= 2; x++ ) {
              vec2 offset = vec2( float( x ), float( y ) ) * ts;
              vec3 sampleColor = texture2D( map, vMapUv + offset ).rgb;

              float spatialDist = float( x * x + y * y );
              float spatialW = exp( -spatialDist / ( 2.0 * sigmaS * sigmaS ) );

              vec3 colorDiff = sampleColor - center;
              float rangeDist = dot( colorDiff, colorDiff );
              float rangeW = exp( -rangeDist / ( 2.0 * sigmaR * sigmaR ) );

              float w = spatialW * rangeW;
              sum += sampleColor * w;
              totalWeight += w;
            }
          }

          gl_FragColor.rgb = sum / max( totalWeight, 1e-6 );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","sigmaSpatial","sigmaRange","wireframe"]),this}}class K extends v{get mode(){return this._uniforms.uMode.value}set mode(e){this._uniforms.uMode.value=e}constructor(e){const{mode:a=0,...n}=e??{};super({transparent:!0,...n}),this._uniforms={uMode:{value:a}},this.onBeforeCompile=r=>{r.uniforms.uMode=this._uniforms.uMode,r.fragmentShader=r.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform float uMode;
        `),r.fragmentShader=r.fragmentShader.replace("#include <dithering_fragment>",`
          float lum = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) );

          vec3 color;
          if ( uMode < 0.5 ) {
            // 标准热成像：黑→蓝→紫→红→橙→黄→白
            color = mix(
              mix( vec3( 0.0, 0.0, 0.0 ), vec3( 0.0, 0.0, 0.6 ), smoothstep( 0.0, 0.2, lum ) ),
              mix( vec3( 0.6, 0.0, 0.6 ), vec3( 1.0, 0.0, 0.0 ), smoothstep( 0.3, 0.5, lum ) ),
              smoothstep( 0.2, 0.3, lum )
            );
            color = mix( color, vec3( 1.0, 0.6, 0.0 ), smoothstep( 0.5, 0.7, lum ) );
            color = mix( color, vec3( 1.0, 1.0, 1.0 ), smoothstep( 0.8, 1.0, lum ) );
          } else if ( uMode < 1.5 ) {
            // 夜视绿：单色绿
            color = vec3( 0.0, lum * 0.9, 0.0 );
          } else {
            // 铁红：黑→红→橙→黄
            vec3 iron0 = vec3( 0.0, 0.0, 0.0 );
            vec3 iron1 = vec3( 0.3, 0.0, 0.0 );
            vec3 iron2 = vec3( 0.8, 0.1, 0.0 );
            vec3 iron3 = vec3( 1.0, 0.6, 0.0 );
            vec3 iron4 = vec3( 1.0, 0.9, 0.4 );
            color = mix( iron0, iron1, smoothstep( 0.0, 0.2, lum ) );
            color = mix( color, iron2, smoothstep( 0.2, 0.4, lum ) );
            color = mix( color, iron3, smoothstep( 0.4, 0.7, lum ) );
            color = mix( color, iron4, smoothstep( 0.7, 1.0, lum ) );
          }

          gl_FragColor.rgb = color;
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class Z extends S{get cellSize(){return this._uniforms.uCellSize.value}set cellSize(e){this._uniforms.uCellSize.value=e}get showGrid(){return this._uniforms.uShowGrid.value>.5}set showGrid(e){this._uniforms.uShowGrid.value=e?1:0}get gridColor(){return this._uniforms.uGridColor.value}set gridColor(e){this._uniforms.uGridColor.value=e}constructor(e){const{cellSize:a=8,showGrid:n=!1,gridColor:r=new c(.1,.1,.1),...i}=e??{};super({transparent:!0,...i}),this._uniforms={uCellSize:{value:a},uShowGrid:{value:n?1:0},uGridColor:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uCellSize=this._uniforms.uCellSize,o.uniforms.uShowGrid=this._uniforms.uShowGrid,o.uniforms.uGridColor=this._uniforms.uGridColor,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uCellSize;
					uniform float uShowGrid;
					uniform vec3 uGridColor;
				`),o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>",`
					vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );
					vec2 cellUv = ts * max( uCellSize, 1.0 );
					vec2 snapped = floor( vMapUv / cellUv + 0.5 ) * cellUv;

					vec4 texel = texture2D( map, snapped );
					vec3 color = texel.rgb;

					// 网格线
					vec2 gridPos = abs( fract( vMapUv / cellUv ) - 0.5 ) * 2.0;
					float gridLine = max( gridPos.x, gridPos.y );
					float grid = 1.0 - smoothstep( 0.92, 1.0, gridLine );
					color = mix( color, uGridColor, grid * uShowGrid );

					diffuseColor.rgb = color;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","cellSize","showGrid"]),this}}class J extends v{get glowColor(){return this._uniforms.uGlowColor.value}set glowColor(e){this._uniforms.uGlowColor.value=e}get intensity(){return this._uniforms.uIntensity.value}set intensity(e){this._uniforms.uIntensity.value=e}get threshold(){return this._uniforms.uThreshold.value}set threshold(e){this._uniforms.uThreshold.value=e}constructor(e){const{glowColor:a=new c(0,1,1),intensity:n=.5,threshold:r=.15,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uGlowColor:{value:a},uIntensity:{value:n},uThreshold:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uGlowColor=this._uniforms.uGlowColor,o.uniforms.uIntensity=this._uniforms.uIntensity,o.uniforms.uThreshold=this._uniforms.uThreshold,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform vec3 uGlowColor;
          uniform float uIntensity;
          uniform float uThreshold;
        `),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;
          vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );
          ${B()}

          // 辉光扩散：直接采样邻居亮度做模糊（9次采样，而非每个邻居重算Sobel）
          float glowSum = sobelEdge;
          for ( int y = -1; y <= 1; y++ ) {
            for ( int x = -1; x <= 1; x++ ) {
              if ( x == 0 && y == 0 ) continue;
              vec2 off = vec2( float( x ), float( y ) ) * ts * 3.0;
              glowSum += dot( texture2D( map, vMapUv + off ).rgb, vec3( 0.299, 0.587, 0.114 ) );
            }
          }
          float glow = glowSum / 9.0;
          float edgeStrength = smoothstep( uThreshold * 0.5, uThreshold, sobelEdge );
          float glowStrength = smoothstep( uThreshold * 0.3, uThreshold * 1.5, glow ) * 0.4;

          // 暗背景 + 霓虹发光
          float lum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
          vec3 darkBg = color * 0.15;
          vec3 neonColor = mix( darkBg, uGlowColor, max( edgeStrength, glowStrength ) * uIntensity * 0.8 );
          // 原图微弱叠加
          neonColor = mix( neonColor, color, lum * 0.3 );

          gl_FragColor.rgb = neonColor;
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class Q extends v{get sepiaStrength(){return this._uniforms.uSepiaStrength.value}set sepiaStrength(e){this._uniforms.uSepiaStrength.value=e}get paperGrain(){return this._uniforms.uPaperGrain.value}set paperGrain(e){this._uniforms.uPaperGrain.value=e}constructor(e){const{sepiaStrength:a=.8,paperGrain:n=.1,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uSepiaStrength:{value:a},uPaperGrain:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uSepiaStrength=this._uniforms.uSepiaStrength,i.uniforms.uPaperGrain=this._uniforms.uPaperGrain,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform float uSepiaStrength;
          uniform float uPaperGrain;
        `),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;

          // 棕褐色调
          float lum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
          vec3 sepia = vec3( lum * 0.9 + 0.1, lum * 0.7 + 0.15, lum * 0.4 + 0.05 );
          color = mix( color, sepia, uSepiaStrength );

          // 纸张纹理（伪随机噪声）
          vec2 paperUv = vMapUv * 100.0;
          vec3 p3 = fract( vec3( paperUv.xyx ) * 0.1031 );
          p3 += dot( p3, p3.yzx + 33.33 );
          float grain = fract( ( p3.x + p3.y ) * p3.z );
          color += ( grain - 0.5 ) * uPaperGrain * 0.3;

          gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class ee extends v{get lineColor(){return this._uniforms.uLineColor.value}set lineColor(e){this._uniforms.uLineColor.value=e}get bgColor(){return this._uniforms.uBgColor.value}set bgColor(e){this._uniforms.uBgColor.value=e}get showGrid(){return this._uniforms.uShowGrid.value>.5}set showGrid(e){this._uniforms.uShowGrid.value=e?1:0}get threshold(){return this._uniforms.uThreshold.value}set threshold(e){this._uniforms.uThreshold.value=e}constructor(e){const{lineColor:a=new c(.8,.9,1),bgColor:n=new c(.05,.08,.25),showGrid:r=!0,threshold:i=.2,...o}=e??{};super({transparent:!0,...o}),this._uniforms={uLineColor:{value:a},uBgColor:{value:n},uShowGrid:{value:r?1:0},uThreshold:{value:i}},this.onBeforeCompile=s=>{s.uniforms.uLineColor=this._uniforms.uLineColor,s.uniforms.uBgColor=this._uniforms.uBgColor,s.uniforms.uShowGrid=this._uniforms.uShowGrid,s.uniforms.uThreshold=this._uniforms.uThreshold,s.fragmentShader=s.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform vec3 uLineColor;
          uniform vec3 uBgColor;
          uniform float uShowGrid;
          uniform float uThreshold;
        `),s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;
          vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );
          ${B()}
          float edgeStrength = smoothstep( uThreshold * 0.5, uThreshold, sobelEdge );

          // 辅助网格
          vec2 gridPos = abs( fract( vMapUv * 20.0 ) - 0.5 ) * 2.0;
          float gridLine = min( gridPos.x, gridPos.y );
          float grid = 1.0 - smoothstep( 0.9, 0.95, gridLine );

          // 合成：蓝底 + 白色边缘线 + 网格
          vec3 bgColor = uBgColor;
          bgColor = mix( bgColor, uLineColor, max( edgeStrength, grid * uShowGrid * 0.3 ) );

          gl_FragColor.rgb = bgColor;
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class te extends v{get contrast(){return this._uniforms.uContrast.value}set contrast(e){this._uniforms.uContrast.value=e}get grain(){return this._uniforms.uGrain.value}set grain(e){this._uniforms.uGrain.value=e}constructor(e){const{contrast:a=.8,grain:n=.05,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uContrast:{value:a},uGrain:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uContrast=this._uniforms.uContrast,i.uniforms.uGrain=this._uniforms.uGrain,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform float uContrast;
          uniform float uGrain;
        `),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;

          // 转灰度
          float lum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
          color = vec3( lum );

          // 胶片颗粒（伪随机）
          vec2 grainUv = vMapUv * 200.0;
          vec3 p3 = fract( vec3( grainUv.xyx ) * 0.1031 );
          p3 += dot( p3, p3.yzx + 33.33 );
          float noise = fract( ( p3.x + p3.y ) * p3.z );
          color += ( noise - 0.5 ) * uGrain;

          // 纯黑白输出（无色调偏移）
          gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class oe extends S{get intensity(){return this._uniforms.uIntensity.value}set intensity(e){this._uniforms.uIntensity.value=e}constructor(e){const{intensity:a=2,...n}=e??{};super({transparent:!0,...n}),this._uniforms={uIntensity:{value:a}},this.onBeforeCompile=r=>{r.uniforms.uIntensity=this._uniforms.uIntensity,r.fragmentShader=r.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uIntensity;
				`),r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`
					vec4 texel = texture2D( map, vMapUv );
					diffuseColor.rgb = texel.rgb;
					diffuseColor.a = opacity * texel.a;
				`),r.fragmentShader=r.fragmentShader.replace("#include <dithering_fragment>",`
					#include <dithering_fragment>

					vec3 wNormal = normalize( normal * mat3( viewMatrix ) );
					vec3 dx = dFdx( wNormal );
					vec3 dy = dFdy( wNormal );

					float curvature = dx.x + dy.y;
					curvature = clamp( curvature * uIntensity * 3.0, -1.0, 1.0 );

					vec3 convexColor = vec3( 0.05, 0.2, 0.8 );
					vec3 concaveColor = vec3( 0.9, 0.2, 0.05 );
					vec3 neutralColor = vec3( 0.5, 0.5, 0.5 );

					vec3 curvColor = curvature > 0.0 ? convexColor : concaveColor;
					curvColor = mix( neutralColor, curvColor, abs( curvature ) );

					gl_FragColor.rgb = mix( gl_FragColor.rgb, curvColor, abs( curvature ) );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","intensity"]),this}}class re extends v{get windowSize(){return this._uniforms.uWindowSize.value}set windowSize(e){this._uniforms.uWindowSize.value=e}get intensity(){return this._uniforms.uIntensity.value}set intensity(e){this._uniforms.uIntensity.value=e}get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}constructor(e){const{windowSize:a=3,intensity:n=1,blend:r=.6,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uWindowSize:{value:a},uIntensity:{value:n},uBlend:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uWindowSize=this._uniforms.uWindowSize,o.uniforms.uIntensity=this._uniforms.uIntensity,o.uniforms.uBlend=this._uniforms.uBlend,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform float uWindowSize;
          uniform float uIntensity;
          uniform float uBlend;
        `),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;
          vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );
          int halfWin = int( floor( uWindowSize / 2.0 ) );
          halfWin = clamp( halfWin, 1, 2 );

          // 纹理粗糙度：颜色方差
          float sum = 0.0;
          float sumSq = 0.0;
          int count = 0;
          for ( int y = -2; y <= 2; y++ ) {
            for ( int x = -2; x <= 2; x++ ) {
              if ( y >= -halfWin && y <= halfWin && x >= -halfWin && x <= halfWin ) {
                vec3 s = texture2D( map, vMapUv + vec2( float( x ), float( y ) ) * ts ).rgb;
                float lum = dot( s, vec3( 0.299, 0.587, 0.114 ) );
                sum += lum;
                sumSq += lum * lum;
                count++;
              }
            }
          }
          float mean = sum / float( count );
          float variance = sumSq / float( count ) - mean * mean;
          float roughness = clamp( sqrt( max( variance, 0.0 ) ) * uIntensity * 3.0, 0.0, 1.0 );

          vec3 roughColor = vec3( 0.8, 0.3, 0.05 );
          vec3 smoothColor = vec3( 0.1, 0.4, 0.8 );
          vec3 analysisColor = mix( smoothColor, roughColor, roughness );

          gl_FragColor.rgb = mix( color, analysisColor, uBlend );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","blend"]),this}}class ie extends v{get threshold(){return this._uniforms.uThreshold.value}set threshold(e){this._uniforms.uThreshold.value=e}get glowIntensity(){return this._uniforms.uGlowIntensity.value}set glowIntensity(e){this._uniforms.uGlowIntensity.value=e}get glowColor(){return this._uniforms.uGlowColor.value}set glowColor(e){this._uniforms.uGlowColor.value=e}constructor(e){const{threshold:a=.6,glowIntensity:n=.8,glowColor:r=new c(1,.8,.5),...i}=e??{};super({transparent:!0,...i}),this._uniforms={uThreshold:{value:a},uGlowIntensity:{value:n},uGlowColor:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uThreshold=this._uniforms.uThreshold,o.uniforms.uGlowIntensity=this._uniforms.uGlowIntensity,o.uniforms.uGlowColor=this._uniforms.uGlowColor,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform float uThreshold;
          uniform float uGlowIntensity;
          uniform vec3 uGlowColor;
        `),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
          vec3 color = gl_FragColor.rgb;

          float lum = dot( color, vec3( 0.299, 0.587, 0.114 ) );

          // 阈值：低于阈值变暗，高于阈值发光
          float darken = smoothstep( uThreshold - 0.2, uThreshold, lum );
          float glowAmount = smoothstep( uThreshold, 1.0, lum );

          // 暗化背景
          vec3 darkBg = color * 0.08;

          // 辉光
          vec3 glow = uGlowColor * glowAmount * uGlowIntensity;

          // 亮部保留原色加辉光
          vec3 lit = color + glow;

          color = mix( darkBg, lit, darken );

          gl_FragColor.rgb = clamp( color, 0.0, 1.0 );
        `)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class ae extends v{get shallow(){return this._uniforms.uShallow.value}set shallow(e){this._uniforms.uShallow.value=e}get deep(){return this._uniforms.uDeep.value}set deep(e){this._uniforms.uDeep.value=e}get depthMax(){return this._uniforms.uDepthMax.value}set depthMax(e){this._uniforms.uDepthMax.value=e}get time(){return this._uniforms.uTime.value}set time(e){this._uniforms.uTime.value=e}get strength(){return this._uniforms.uStrength.value}set strength(e){this._uniforms.uStrength.value=e}get frequency(){return this._uniforms.uFrequency.value}set frequency(e){this._uniforms.uFrequency.value=e}get speed(){return this._uniforms.uSpeed.value}set speed(e){this._uniforms.uSpeed.value=e}constructor(e){const{shallow:a=new c(.2,.6,.8),deep:n=new c(.01,.05,.2),depthMax:r=5e3,strength:i=.02,frequency:o=6,speed:s=1,...l}=e??{};super({transparent:!0,dithering:!0,...l}),this._uniforms={uShallow:{value:a},uDeep:{value:n},uDepthMax:{value:r},uTime:{value:0},uStrength:{value:i},uFrequency:{value:o},uSpeed:{value:s}},this.onBeforeCompile=g=>{g.uniforms.uShallow=this._uniforms.uShallow,g.uniforms.uDeep=this._uniforms.uDeep,g.uniforms.uDepthMax=this._uniforms.uDepthMax,g.uniforms.uTime=this._uniforms.uTime,g.uniforms.uStrength=this._uniforms.uStrength,g.uniforms.uFrequency=this._uniforms.uFrequency,g.uniforms.uSpeed=this._uniforms.uSpeed,g.fragmentShader=g.fragmentShader.replace("uniform float opacity;",`
          uniform float opacity;
          uniform vec3 uShallow;
          uniform vec3 uDeep;
          uniform float uDepthMax;
          uniform float uTime;
          uniform float uStrength;
          uniform float uFrequency;
          uniform float uSpeed;

          float hash21( vec2 p ) {
            p = fract( p * vec2( 234.34, 435.345 ) );
            p += dot( p, p + 34.23 );
            return fract( p.x * p.y );
          }
          float noise2D( vec2 p ) {
            vec2 i = floor( p );
            vec2 f = fract( p );
            f = f * f * ( 3.0 - 2.0 * f );
            float a = hash21( i );
            float b = hash21( i + vec2( 1.0, 0.0 ) );
            float c = hash21( i + vec2( 0.0, 1.0 ) );
            float d = hash21( i + vec2( 1.0, 1.0 ) );
            return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
          }
        `),g.fragmentShader=g.fragmentShader.replace("#include <dithering_fragment>",`
          float t = uTime * uSpeed;
          float n1 = noise2D( vMapUv * uFrequency + vec2( t, 0.0 ) );
          float n2 = noise2D( vMapUv * uFrequency + vec2( 0.0, t ) + 5.0 );
          vec2 distortion = vec2( n1 - 0.5, n2 - 0.5 ) * uStrength;
          vec4 texel = texture2D( map, vMapUv + distortion );

          float lum = dot( texel.rgb, vec3( 0.299, 0.587, 0.114 ) );
          float depthFactor = clamp( ( 1.0 - lum ) * ( uDepthMax / 5000.0 ), 0.0, 1.0 );

          vec3 depthColor = mix( uShallow, uDeep, depthFactor );

          depthColor = mix( depthColor, vec3( 0.02, 0.03, 0.06 ), pow( depthFactor, 2.0 ) * 0.5 );

          gl_FragColor.rgb = depthColor;
        `)}}onBeforeRender(e,a,n,r,i,o){this._uniforms.uTime.value=performance.now()*.001}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","strength","frequency","speed"]),this}}class ne extends Ae{constructor(e){super({transparent:!0,...e}),this.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <dithering_fragment>",`
                    #include <dithering_fragment>
                    vec4 texel = texture2D( map, vMapUv );
                    vec3 inverted = 1.0 - texel.rgb;
                    float luminance = dot(inverted, vec3(0.299, 0.587, 0.114));
                    vec3 grayscale = vec3(luminance);
                    vec3 finalColor = mix(grayscale, inverted, 0.6) * diffuse * 2.0;
                    gl_FragColor = vec4( finalColor, opacity * texel.a );
                `)}}copy(e){return super.copy(e),h(this,e,["visible","opacity","color","wireframe","toneMapped"]),this}}class ue extends S{get minHeight(){return this._elevationUniforms.uMinHeight.value}set minHeight(e){this._elevationUniforms.uMinHeight.value=e}get maxHeight(){return this._elevationUniforms.uMaxHeight.value}set maxHeight(e){this._elevationUniforms.uMaxHeight.value=e}get textureBlend(){return this._elevationUniforms.uTextureBlend.value}set textureBlend(e){this._elevationUniforms.uTextureBlend.value=e}constructor(e=0,a=8848,n){super({transparent:!0,...n}),this._elevationUniforms={uMinHeight:{value:e},uMaxHeight:{value:a},uTextureBlend:{value:0},uWaterColor:{value:new c(.1,.3,.7)},uSandColor:{value:new c(.76,.7,.5)},uGrassColor:{value:new c(.3,.6,.2)},uRockColor:{value:new c(.5,.4,.3)},uSnowColor:{value:new c(.95,.95,1)}},this.onBeforeCompile=r=>{r.uniforms.uMinHeight=this._elevationUniforms.uMinHeight,r.uniforms.uMaxHeight=this._elevationUniforms.uMaxHeight,r.uniforms.uTextureBlend=this._elevationUniforms.uTextureBlend,r.uniforms.uWaterColor=this._elevationUniforms.uWaterColor,r.uniforms.uSandColor=this._elevationUniforms.uSandColor,r.uniforms.uGrassColor=this._elevationUniforms.uGrassColor,r.uniforms.uRockColor=this._elevationUniforms.uRockColor,r.uniforms.uSnowColor=this._elevationUniforms.uSnowColor,r.vertexShader=r.vertexShader.replace("#include <logdepthbuf_pars_vertex>",`
					varying float vHeight;
					#include <logdepthbuf_pars_vertex>
				`),r.vertexShader=r.vertexShader.replace("#include <project_vertex>",`
					#include <project_vertex>
					vHeight = position.z;
				`),r.fragmentShader=r.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					varying float vHeight;
					uniform float uMinHeight;
					uniform float uMaxHeight;
					uniform float uTextureBlend;
					uniform vec3 uWaterColor;
					uniform vec3 uSandColor;
					uniform vec3 uGrassColor;
					uniform vec3 uRockColor;
					uniform vec3 uSnowColor;

					// 平滑过渡函数（三次 Hermite 曲线）
					float smoothBlend(float edge0, float edge1, float x) {
						float t = clamp( ( x - edge0 ) / ( edge1 - edge0 ), 0.0, 1.0 );
						return t * t * ( 3.0 - 2.0 * t );
					}
				`),r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`
					vec4 texel = texture2D( map, vMapUv );

					// 将高度归一化到 [0,1] 区间
					float normalizedHeight = clamp( ( vHeight - uMinHeight ) / max( uMaxHeight - uMinHeight, 1.0 ), 0.0, 1.0 );

					// 各高度段的归一化分界阈值
					float waterLevel = 0.2;
					float sandLevel = 0.3;
					float grassLevel = 0.6;
					float rockLevel = 0.85;

					vec3 rampColor;
					if ( normalizedHeight < waterLevel ) {
						// 水域：深蓝 → 蓝
						rampColor = mix( uWaterColor * 0.5, uWaterColor, smoothBlend( 0.0, waterLevel, normalizedHeight ) );
					} else if ( normalizedHeight < sandLevel ) {
						// 沙滩：蓝 → 沙色
						rampColor = mix( uWaterColor, uSandColor, smoothBlend( waterLevel, sandLevel, normalizedHeight ) );
					} else if ( normalizedHeight < grassLevel ) {
						// 草地：沙色 → 绿
						rampColor = mix( uSandColor, uGrassColor, smoothBlend( sandLevel, grassLevel, normalizedHeight ) );
					} else if ( normalizedHeight < rockLevel ) {
						// 岩石：绿 → 棕
						rampColor = mix( uGrassColor, uRockColor, smoothBlend( grassLevel, rockLevel, normalizedHeight ) );
					} else {
						// 雪地：棕 → 白
						rampColor = mix( uRockColor, uSnowColor, smoothBlend( rockLevel, 1.0, normalizedHeight ) );
					}

					// 与原始影像纹理混合
					vec3 color = mix( rampColor, texel.rgb, clamp( uTextureBlend, 0.0, 1.0 ) );

					diffuseColor.rgb = color;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._elevationUniforms=e._elevationUniforms,h(this,e,["visible","opacity","transparent","minHeight","maxHeight","textureBlend","wireframe"]),this}}class le extends v{get contourColor(){return this._uniforms.contourColor.value}set contourColor(e){this._uniforms.contourColor.value=e}get contourInterval(){return this._uniforms.contourInterval.value}set contourInterval(e){this._uniforms.contourInterval.value=e}get contourWidth(){return this._uniforms.contourWidth.value}set contourWidth(e){this._uniforms.contourWidth.value=e}constructor(e){const{contourColor:a,contourInterval:n,contourWidth:r}=e??{};super({transparent:!0}),this._uniforms={contourColor:{value:new c(a??9127187)},contourInterval:{value:n??100},contourWidth:{value:r??1}},this.onBeforeCompile=i=>{i.uniforms.contourColor=this._uniforms.contourColor,i.uniforms.contourInterval=this._uniforms.contourInterval,i.uniforms.contourWidth=this._uniforms.contourWidth,i.vertexShader=i.vertexShader.replace("#include <logdepthbuf_pars_vertex>",`
					varying float vHeight;
					#include <logdepthbuf_pars_vertex>
				`),i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`
					#include <project_vertex>
					vHeight = position.z;
				`),i.fragmentShader=i.fragmentShader.replace("precision highp float;",`
					#extension GL_OES_standard_derivatives : enable
					precision highp float;
				`),i.fragmentShader=i.fragmentShader.replace("#include <logdepthbuf_pars_fragment>",`
					varying float vHeight;
					uniform vec3 contourColor;
					uniform float contourInterval;
					uniform float contourWidth;
					#include <logdepthbuf_pars_fragment>
				`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
			#include <dithering_fragment>
				float contourPos = mod(vHeight, contourInterval) / contourInterval;
				float pixelWidth = contourWidth * fwidth(contourPos);
				float distToEdge = min(contourPos, 1.0 - contourPos);
				float contourAlpha = 1.0 - step(pixelWidth, distToEdge);
				// 边缘渐变：等高线两侧明暗差，模拟浮雕
				float edgeGrad = (contourPos < 0.5) ? contourPos * 2.0 : (1.0 - contourPos) * 2.0;
				float shade = mix(0.6, 1.0, edgeGrad);
				gl_FragColor.rgb = mix(gl_FragColor.rgb, contourColor * shade, contourAlpha);
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class se extends S{get inkDensity(){return this._inkUniforms.uInkDensity.value}set inkDensity(e){this._inkUniforms.uInkDensity.value=e}get colorStrength(){return this._inkUniforms.uColorStrength.value}set colorStrength(e){this._inkUniforms.uColorStrength.value=e}get edgeThreshold(){return this._inkUniforms.uEdgeThreshold.value}set edgeThreshold(e){this._inkUniforms.uEdgeThreshold.value=e}get paperGrain(){return this._inkUniforms.uPaperGrain.value}set paperGrain(e){this._inkUniforms.uPaperGrain.value=e}get contrast(){return this._inkUniforms.uContrast.value}set contrast(e){this._inkUniforms.uContrast.value=e}constructor(e){const{inkColor:a=1118481,paperColor:n=16117990,warmTint:r=13934698,coolTint:i=5933738,inkDensity:o=.2,colorStrength:s=.6,edgeThreshold:l=.5,paperGrain:g=.2,contrast:u=.85,...t}=e??{};super({transparent:!0,...t}),this._inkUniforms={uInkColor:{value:new c(a)},uPaperColor:{value:new c(n)},uWarmTint:{value:new c(r)},uCoolTint:{value:new c(i)},uInkDensity:{value:o},uColorStrength:{value:s},uEdgeThreshold:{value:l},uPaperGrain:{value:g},uContrast:{value:u}},this.onBeforeCompile=m=>{m.uniforms.uInkColor=this._inkUniforms.uInkColor,m.uniforms.uPaperColor=this._inkUniforms.uPaperColor,m.uniforms.uWarmTint=this._inkUniforms.uWarmTint,m.uniforms.uCoolTint=this._inkUniforms.uCoolTint,m.uniforms.uInkDensity=this._inkUniforms.uInkDensity,m.uniforms.uColorStrength=this._inkUniforms.uColorStrength,m.uniforms.uEdgeThreshold=this._inkUniforms.uEdgeThreshold,m.uniforms.uPaperGrain=this._inkUniforms.uPaperGrain,m.uniforms.uContrast=this._inkUniforms.uContrast,m.fragmentShader=m.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform vec3 uInkColor;
					uniform vec3 uPaperColor;
					uniform vec3 uWarmTint;
					uniform vec3 uCoolTint;
					uniform float uInkDensity;
					uniform float uColorStrength;
					uniform float uEdgeThreshold;
					uniform float uPaperGrain;
					uniform float uContrast;
				`),m.fragmentShader=m.fragmentShader.replace("#include <lights_lambert_pars_fragment>",`
					varying vec3 vViewPosition;

					struct LambertMaterial {
						vec3 diffuseColor;
						float specularStrength;
					};

					void RE_Direct_Lambert( const in IncidentLight directLight,
						const in vec3 geometryPosition, const in vec3 geometryNormal,
						const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal,
						const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

						float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
						vec3 irradiance = dotNL * directLight.color;
						reflectedLight.directDiffuse += irradiance * material.diffuseColor * uContrast;
					}

					void RE_IndirectDiffuse_Lambert( const in vec3 irradiance,
						const in vec3 geometryPosition, const in vec3 geometryNormal,
						const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal,
						const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

						reflectedLight.indirectDiffuse += irradiance * material.diffuseColor * max( 0.0, 1.0 - uContrast * 1.5 );
					}

					#define RE_Direct               RE_Direct_Lambert
					#define RE_IndirectDiffuse      RE_IndirectDiffuse_Lambert
				`),m.fragmentShader=m.fragmentShader.replace("#include <map_fragment>",`
					vec4 texel = texture2D(map, vMapUv);

					// 转灰度（墨分五色的基础）
					float luminance = dot(texel.rgb, vec3(0.299, 0.587, 0.114));

					// 亮度映射到墨色浓淡（焦浓重淡清五色）
					float inkStrength = 1.0 - luminance;
					inkStrength = smoothstep(0.15, 0.75, inkStrength);
					inkStrength *= uInkDensity;

					// ========== 随类赋彩（国画效果） ==========
					vec3 baseColor = texel.rgb;
					if (uColorStrength > 0.0) {
						// 低亮度区 → 冷色渲染（花青、石绿，山水暗部）
						// 高亮度区 → 暖色渲染（赭石、藤黄，山水亮部）
						vec3 coolColor = vec3(texel.rgb.r * 0.6, texel.rgb.g * 0.85, texel.rgb.b * 1.1 + 0.08);
						vec3 warmColor = vec3(texel.rgb.r * 1.1 + 0.06, texel.rgb.g * 1.0 + 0.03, texel.rgb.b * 0.65);
						float warmMix = smoothstep(0.25, 0.85, luminance);
						vec3 tintedColor = mix(coolColor, warmColor, warmMix);
						// 叠加传统国画色（赭石、花青的感觉）
						tintedColor = mix(tintedColor, tintedColor * uWarmTint * 1.5, warmMix * 0.3);
						tintedColor = mix(tintedColor, tintedColor * uCoolTint * 1.2, (1.0 - warmMix) * 0.25);
						baseColor = mix(texel.rgb, tintedColor, uColorStrength);
					}

					// ========== 墨色与色彩融合 ==========
					// 底层：纸色 + 墨色
					vec3 inkLayer = mix(uPaperColor, uInkColor, inkStrength);
					// 叠加色彩层（薄施淡彩，透明覆盖）
					float colorAlpha = uColorStrength * (1.0 - inkStrength * 0.6);
					vec3 color = mix(inkLayer, baseColor, colorAlpha);

					// 宣纸纹理（多层噪声叠加）
					vec2 paperUv = vMapUv * 80.0;
					vec3 p3 = fract(vec3(paperUv.xyx) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float h1 = fract((p3.x + p3.y) * p3.z);
					p3 = fract(vec3(paperUv.xyx * 2.0) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float h2 = fract((p3.x + p3.y) * p3.z);
					p3 = fract(vec3(paperUv.xyx * 4.0) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float h3 = fract((p3.x + p3.y) * p3.z);
					float grain = (h1 * 0.5 + h2 * 0.25 + h3 * 0.125) * uPaperGrain;
					// 纸张纹理在亮部更明显
					color += grain * (1.0 - inkStrength * 0.5);

					// 边缘轮廓线（水墨画的勾勒线条）
					vec2 texelSize = vec2(
						length(dFdx(vMapUv)),
						length(dFdy(vMapUv))
					);
					float tl = dot(texture2D(map, vMapUv + vec2(-texelSize.x, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float t  = dot(texture2D(map, vMapUv + vec2(0.0, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float tr = dot(texture2D(map, vMapUv + vec2(texelSize.x, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float l  = dot(texture2D(map, vMapUv + vec2(-texelSize.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
					float r  = dot(texture2D(map, vMapUv + vec2(texelSize.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
					float bl = dot(texture2D(map, vMapUv + vec2(-texelSize.x, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float b  = dot(texture2D(map, vMapUv + vec2(0.0, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float br = dot(texture2D(map, vMapUv + vec2(texelSize.x, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float gx = -tl - 2.0 * l - bl + tr + 2.0 * r + br;
					float gy = -tl - 2.0 * t - tr + bl + 2.0 * b + br;
					float edge = sqrt(gx * gx + gy * gy);
					float edgeStrength = smoothstep(uEdgeThreshold * 0.5, uEdgeThreshold, edge);
					// 轮廓线用中等墨色
					vec3 edgeColor = uColorStrength > 0.0 ? uInkColor : mix(uInkColor * 0.7, uPaperColor, 0.3);
					color = mix(color, edgeColor, edgeStrength * 0.8);

					diffuseColor.rgb = color; diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._inkUniforms=e._inkUniforms,h(this,e,["visible","opacity","transparent","inkDensity","colorStrength","wireframe"]),this}}class fe extends S{get hatchDensity(){return this._sketchUniforms.uHatchDensity.value}set hatchDensity(e){this._sketchUniforms.uHatchDensity.value=e}get edgeThreshold(){return this._sketchUniforms.uEdgeThreshold.value}set edgeThreshold(e){this._sketchUniforms.uEdgeThreshold.value=e}get paperGrain(){return this._sketchUniforms.uPaperGrain.value}set paperGrain(e){this._sketchUniforms.uPaperGrain.value=e}get lineFreq(){return this._sketchUniforms.uLineFreq.value}set lineFreq(e){this._sketchUniforms.uLineFreq.value=e}get lineWidth(){return this._sketchUniforms.uLineWidth.value}set lineWidth(e){this._sketchUniforms.uLineWidth.value=e}constructor(e){const{pencilColor:a=1710618,paperColor:n=16117992,hatchDensity:r=.2,edgeThreshold:i=.35,paperGrain:o=.08,lineFreq:s=60,lineWidth:l=.45,...g}=e??{};super({transparent:!0,...g}),this._sketchUniforms={uPencilColor:{value:new c(a)},uPaperColor:{value:new c(n)},uHatchDensity:{value:r},uEdgeThreshold:{value:i},uPaperGrain:{value:o},uLineFreq:{value:s},uLineWidth:{value:l}},this.onBeforeCompile=u=>{u.uniforms.uPencilColor=this._sketchUniforms.uPencilColor,u.uniforms.uPaperColor=this._sketchUniforms.uPaperColor,u.uniforms.uHatchDensity=this._sketchUniforms.uHatchDensity,u.uniforms.uEdgeThreshold=this._sketchUniforms.uEdgeThreshold,u.uniforms.uPaperGrain=this._sketchUniforms.uPaperGrain,u.uniforms.uLineFreq=this._sketchUniforms.uLineFreq,u.uniforms.uLineWidth=this._sketchUniforms.uLineWidth,u.fragmentShader=u.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform vec3 uPencilColor;
					uniform vec3 uPaperColor;
					uniform float uHatchDensity;
					uniform float uEdgeThreshold;
					uniform float uPaperGrain;
					uniform float uLineFreq;
					uniform float uLineWidth;

					// ========== 旋转矩阵 ==========
					mat2 rot2(float a) {
						float c = cos(a), s = sin(a);
						return mat2(c, -s, s, c);
					}

					// ========== 噪声 ==========
					float hash21(vec2 p) {
						p = fract(p * vec2(127.1, 311.7));
						p += dot(p, p + 19.19);
						return fract(p.x * p.y);
					}

					float vnoise(vec2 p) {
						vec2 i = floor(p), f = fract(p);
						vec2 u = f * f * (3.0 - 2.0 * f);
						return mix(
							mix(hash21(i),             hash21(i + vec2(1.0, 0.0)), u.x),
							mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
							u.y);
					}

					// ========== 单层排线 ==========
					// 返回 0.0 = 墨线, 1.0 = 纸张间隙
					float hatchLayer(vec2 uv, float angle) {
						vec2 ruv = rot2(angle) * uv;
						// 噪声位移，模拟手绘抖动
						float w = 0.015 * (vnoise(uv * 4.0) - 0.5);
						float s = fract((ruv.y + w) * uLineFreq);
						// fwidth 抗锯齿
						float fw = fwidth(ruv.y * uLineFreq) * 1.5;
						// 线条间隙
						float gap = smoothstep(0.0, fw, s) * smoothstep(0.0, fw, 1.0 - s);
						// 线条本身（用 lineWidth 控制粗细）
						float stroke = smoothstep(uLineWidth, uLineWidth + fw, s) *
							(1.0 - smoothstep(1.0 - uLineWidth - fw, 1.0 - uLineWidth, s));
						return gap + stroke;
					}
				`),u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`
					vec4 texel = texture2D(map, vMapUv);
					float lum = dot(texel.rgb, vec3(0.299, 0.587, 0.114));

					// 屏幕空间 UV（保持排线粗细一致）
					vec2 suv = vMapUv * 500.0;

					// 4 层排线，按亮度阈值逐步激活
					float h0 = hatchLayer(suv, 0.0);
					float h1 = hatchLayer(suv, 0.7854);   // 45°
					float h2 = hatchLayer(suv, 1.5708);   // 90°
					float h3 = hatchLayer(suv, 2.3562);   // 135°

					// 亮度阈值：亮部→暗部逐步叠加排线
					float t0 = smoothstep(0.70, 0.55, lum) * uHatchDensity;
					float t1 = smoothstep(0.50, 0.35, lum) * uHatchDensity;
					float t2 = smoothstep(0.32, 0.20, lum) * uHatchDensity;
					float t3 = smoothstep(0.20, 0.10, lum) * uHatchDensity;

					// min() 叠加：每层排线只让画面更暗
					float paper = 1.0;
					paper = min(paper, mix(1.0, h0, t0));
					paper = min(paper, mix(1.0, h1, t1));
					paper = min(paper, mix(1.0, h2, t2));
					paper = min(paper, mix(1.0, h3, t3));

					// 纸张颗粒纹理
					paper += (vnoise(suv * 0.5) - 0.5) * uPaperGrain;
					paper = clamp(paper, 0.0, 1.0);

					vec3 color = mix(uPencilColor, uPaperColor, paper);

					// ========== 轮廓线（Sobel 边缘检测） ==========
					vec2 texelSize = vec2(
						length(dFdx(vMapUv)),
						length(dFdy(vMapUv))
					);
					float tl = dot(texture2D(map, vMapUv + vec2(-texelSize.x, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float t  = dot(texture2D(map, vMapUv + vec2(0.0, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float tr = dot(texture2D(map, vMapUv + vec2(texelSize.x, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float l  = dot(texture2D(map, vMapUv + vec2(-texelSize.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
					float r  = dot(texture2D(map, vMapUv + vec2(texelSize.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
					float bl = dot(texture2D(map, vMapUv + vec2(-texelSize.x, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float b  = dot(texture2D(map, vMapUv + vec2(0.0, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float br = dot(texture2D(map, vMapUv + vec2(texelSize.x, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float gx = -tl - 2.0 * l - bl + tr + 2.0 * r + br;
					float gy = -tl - 2.0 * t - tr + bl + 2.0 * b + br;
					float edge = sqrt(gx * gx + gy * gy);
					float edgeStrength = smoothstep(uEdgeThreshold * 0.4, uEdgeThreshold * 1.2, edge);
					// 轮廓线加手绘抖动
					float edgeWobble = vnoise(vMapUv * 80.0) * 0.3 + 0.7;
					color = mix(color, uPencilColor, edgeStrength * 0.7 * edgeWobble);

					diffuseColor.rgb = color;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._sketchUniforms=e._sketchUniforms,h(this,e,["visible","opacity","transparent","wireframe","hatchDensity","edgeThreshold","paperGrain","lineFreq","lineWidth"]),this}}class me extends S{get brushStrength(){return this._oilUniforms.uBrushStrength.value}set brushStrength(e){this._oilUniforms.uBrushStrength.value=e}get colorBoost(){return this._oilUniforms.uColorBoost.value}set colorBoost(e){this._oilUniforms.uColorBoost.value=e}get canvasGrain(){return this._oilUniforms.uCanvasGrain.value}set canvasGrain(e){this._oilUniforms.uCanvasGrain.value=e}get edgeThreshold(){return this._oilUniforms.uEdgeThreshold.value}set edgeThreshold(e){this._oilUniforms.uEdgeThreshold.value=e}get swirlStrength(){return this._oilUniforms.uSwirlStrength.value}set swirlStrength(e){this._oilUniforms.uSwirlStrength.value=e}constructor(e){const{brushStrength:a=.5,colorBoost:n=.35,canvasGrain:r=.12,edgeThreshold:i=.3,swirlStrength:o=0,...s}=e??{};super({transparent:!0,...s}),this._oilUniforms={uBrushStrength:{value:a},uColorBoost:{value:n},uCanvasGrain:{value:r},uEdgeThreshold:{value:i},uSwirlStrength:{value:o}},this.onBeforeCompile=l=>{l.uniforms.uBrushStrength=this._oilUniforms.uBrushStrength,l.uniforms.uColorBoost=this._oilUniforms.uColorBoost,l.uniforms.uCanvasGrain=this._oilUniforms.uCanvasGrain,l.uniforms.uEdgeThreshold=this._oilUniforms.uEdgeThreshold,l.uniforms.uSwirlStrength=this._oilUniforms.uSwirlStrength,l.fragmentShader=l.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uBrushStrength;
					uniform float uColorBoost;
					uniform float uCanvasGrain;
					uniform float uEdgeThreshold;
					uniform float uSwirlStrength;

					// ========== 简易 2D 噪声（用于旋涡） ==========
					float hash(vec2 p) {
						return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
					}
					float noise(vec2 p) {
						vec2 i = floor(p);
						vec2 f = fract(p);
						f = f * f * (3.0 - 2.0 * f);
						float a = hash(i);
						float b = hash(i + vec2(1.0, 0.0));
						float c = hash(i + vec2(0.0, 1.0));
						float d = hash(i + vec2(1.0, 1.0));
						return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
					}
					float fbm(vec2 p) {
						float v = 0.0;
						float a = 0.5;
						for (int i = 0; i < 4; i++) {
							v += a * noise(p);
							p *= 2.0;
							a *= 0.5;
						}
						return v;
					}
				`),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",`
					vec2 uv = vMapUv;
					vec4 texel = texture2D(map, uv);
					vec2 ts = vec2(
						length(dFdx(vMapUv)),
						length(dFdy(vMapUv))
					);

					// ========== Step 1: 旋涡 UV 偏移（梵高风格） ==========
					vec2 swirlField = vec2(0.0);
					vec2 swirlOffset = vec2(0.0);
					if (uSwirlStrength > 0.0) {
						float n1 = fbm(uv * 6.0);
						float n2 = fbm(uv * 6.0 + vec2(5.2, 1.3));
						swirlField = vec2(cos(n1 * 6.2832), sin(n2 * 6.2832));
						swirlOffset = swirlField * 0.004 * uSwirlStrength;
					}

					// ========== Step 2: Sobel 边缘检测 + 梯度方向 ==========
					${L("uv","ts","swirlOffset")}
					float edge = length( sobelGrad );
					float angle = atan( sobelGrad.y, sobelGrad.x );

					// ========== Step 3: 沿梯度方向的笔触纹理 ==========
					// 笔触方向：梯度方向 + 旋涡场扰动（梵高风格）
					float swirlAngle = uSwirlStrength > 0.0 ? atan(swirlField.y, swirlField.x) : 0.0;
					float brushAngle = angle + swirlAngle * uSwirlStrength;
					float ca = cos(brushAngle);
					float sa = sin(brushAngle);
					// 第一层笔触（密）
					float brushCoord = uv.x * ca + uv.y * sa;
					float brushPattern = fract(brushCoord * 40.0);
					brushPattern = smoothstep(0.3, 0.5, brushPattern) * smoothstep(0.7, 0.5, brushPattern);
					// 第二层笔触（疏，角度偏移，长短交错）
					float ca2 = cos(brushAngle + 0.3);
					float sa2 = sin(brushAngle + 0.3);
					float brushCoord2 = uv.x * ca2 + uv.y * sa2;
					float brushPattern2 = fract(brushCoord2 * 25.0);
					brushPattern2 = smoothstep(0.3, 0.5, brushPattern2) * smoothstep(0.7, 0.5, brushPattern2);
					brushPattern = mix(brushPattern, brushPattern2, 0.4);

					// ========== Step 4: 颜色采样 ==========
					vec3 color = texture2D(map, uv + swirlOffset).rgb;

					// ========== Step 5: 厚涂凹凸光影 ==========
					float bDx = dFdx(brushPattern);
					float bDy = dFdy(brushPattern);
					vec3 bumpNormal = normalize(vec3(-bDx * 15.0 * uBrushStrength, -bDy * 15.0 * uBrushStrength, 1.0));
					vec3 lightDir = normalize(vec3(0.5, 0.8, 0.6));
					float bumpLight = dot(bumpNormal, lightDir) * 0.5 + 0.5;
					color *= 0.75 + bumpLight * 0.35 * uBrushStrength;

					// ========== Step 6: 色彩增强 ==========
					float lum = dot(color, vec3(0.299, 0.587, 0.114));
					color = mix(vec3(lum), color, 1.0 + uColorBoost);
					// 暖色调偏移
					color.r *= 1.04;
					color.b *= 0.96;

					// ========== Step 7: 画布编织纹理 ==========
					vec2 canvasUv = uv * 100.0;
					float weaveX = step(0.6, fract(canvasUv.x)) * 0.08;
					float weaveY = step(0.6, fract(canvasUv.y)) * 0.08;
					float weave = (weaveX + weaveY) * uCanvasGrain;
					color += vec3(weave * 1.1, weave * 1.05, weave * 0.9);

					// ========== Step 8: 笔触式轮廓线 ==========
					float edgeStrength = smoothstep(uEdgeThreshold * 0.5, uEdgeThreshold, edge);
					float contourNoise = fract(brushCoord * 15.0) * 0.3 + 0.7;
					color = mix(color, color * 0.3, edgeStrength * 0.6 * contourNoise);

					diffuseColor.rgb = color;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._oilUniforms=e._oilUniforms,h(this,e,["visible","opacity","transparent","swirlStrength","wireframe"]),this}}class he extends S{get diffusion(){return this._wcUniforms.uDiffusion.value}set diffusion(e){this._wcUniforms.uDiffusion.value=e}get granulation(){return this._wcUniforms.uGranulation.value}set granulation(e){this._wcUniforms.uGranulation.value=e}get paperWet(){return this._wcUniforms.uPaperWet.value}set paperWet(e){this._wcUniforms.uPaperWet.value=e}get colorLevels(){return this._wcUniforms.uColorLevels.value}set colorLevels(e){this._wcUniforms.uColorLevels.value=e}get edgeThreshold(){return this._wcUniforms.uEdgeThreshold.value}set edgeThreshold(e){this._wcUniforms.uEdgeThreshold.value=e}constructor(e){const{diffusion:a=.5,granulation:n=.25,paperWet:r=.5,colorLevels:i=6,edgeThreshold:o=.2,...s}=e??{};super({transparent:!0,...s}),this._wcUniforms={uDiffusion:{value:a},uGranulation:{value:n},uPaperWet:{value:r},uColorLevels:{value:i},uEdgeThreshold:{value:o}},this.onBeforeCompile=l=>{l.uniforms.uDiffusion=this._wcUniforms.uDiffusion,l.uniforms.uGranulation=this._wcUniforms.uGranulation,l.uniforms.uPaperWet=this._wcUniforms.uPaperWet,l.uniforms.uColorLevels=this._wcUniforms.uColorLevels,l.uniforms.uEdgeThreshold=this._wcUniforms.uEdgeThreshold,l.fragmentShader=l.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uDiffusion;
					uniform float uGranulation;
					uniform float uPaperWet;
					uniform float uColorLevels;
					uniform float uEdgeThreshold;
				`),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",`
					vec2 uv = vMapUv;
					vec4 texel = texture2D(map, uv);
					vec2 texelSize = vec2(
						length(dFdx(vMapUv)),
						length(dFdy(vMapUv))
					);

					// ========== 色彩扩散：多方向偏移采样混合 ==========
					vec3 color = vec3(0.0);
					float totalWeight = 0.0;
					color += texel.rgb * 4.0;
					totalWeight += 4.0;
					float diffDist = uDiffusion * 0.008;
					for (float i = -2.0; i <= 2.0; i += 1.0) {
						for (float j = -2.0; j <= 2.0; j += 1.0) {
							if (i == 0.0 && j == 0.0) continue;
							vec2 offset = vec2(i, j) * texelSize * diffDist * 30.0;
							float w = 1.0 / (1.0 + length(vec2(i, j)));
							color += texture2D(map, uv + offset).rgb * w;
							totalWeight += w;
						}
					}
					color /= totalWeight;

					// ========== 色彩量化（减少色阶，水彩块面感） ==========
					float levels = max(uColorLevels, 2.0);
					color = floor(color * levels + 0.5) / levels;

					// ========== 柔和饱和度（水彩淡雅，不要过于鲜艳） ==========
					float lum = dot(color, vec3(0.299, 0.587, 0.114));
					color = mix(vec3(lum), color, 1.1);

					// ========== 颗粒沉淀 ==========
					vec2 grainUv = uv * 200.0;
					vec3 p3 = fract(vec3(grainUv.xyx) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float grain1 = fract((p3.x + p3.y) * p3.z);
					p3 = fract(vec3(grainUv.xyx * 1.5) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float grain2 = fract((p3.x + p3.y) * p3.z);
					float grainMask = 1.0 - lum;
					float grain = (grain1 * 0.6 + grain2 * 0.4) * uGranulation * grainMask;
					color -= grain * 0.15;

					// ========== 纸张底色透出（水彩留白，淡雅关键） ==========
					vec3 paperBase = vec3(0.98, 0.96, 0.92);
					color = mix(color, paperBase, uPaperWet * 0.25);

					// ========== 边缘处理：水彩柔边 ==========
					float tl = dot(texture2D(map, uv + vec2(-texelSize.x, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float t  = dot(texture2D(map, uv + vec2(0.0, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float tr = dot(texture2D(map, uv + vec2(texelSize.x, -texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float l  = dot(texture2D(map, uv + vec2(-texelSize.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
					float r  = dot(texture2D(map, uv + vec2(texelSize.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
					float bl = dot(texture2D(map, uv + vec2(-texelSize.x, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float b  = dot(texture2D(map, uv + vec2(0.0, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float br = dot(texture2D(map, uv + vec2(texelSize.x, texelSize.y)).rgb, vec3(0.299, 0.587, 0.114));
					float gx = -tl - 2.0 * l - bl + tr + 2.0 * r + br;
					float gy = -tl - 2.0 * t - tr + bl + 2.0 * b + br;
					float edge = sqrt(gx * gx + gy * gy);

					// 柔和轮廓线
					float edgeStrength = smoothstep(uEdgeThreshold * 0.5, uEdgeThreshold, edge);
					vec3 edgeColor = mix(color * 0.7, paperBase, 0.3);
					color = mix(color, edgeColor, edgeStrength * 0.35);

					diffuseColor.rgb = color;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._wcUniforms=e._wcUniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class ce extends S{get reliefDepth(){return this._reliefUniforms.uReliefDepth.value}set reliefDepth(e){this._reliefUniforms.uReliefDepth.value=e}get stoneTexture(){return this._reliefUniforms.uStoneTexture.value}set stoneTexture(e){this._reliefUniforms.uStoneTexture.value=e}get smoothness(){return this._reliefUniforms.uSmoothness.value}set smoothness(e){this._reliefUniforms.uSmoothness.value=e}get brightness(){return this._reliefUniforms.uBrightness.value}set brightness(e){this._reliefUniforms.uBrightness.value=e}get lightAngle(){return this._reliefUniforms.uLightAngle.value}set lightAngle(e){this._reliefUniforms.uLightAngle.value=e}get edgeThreshold(){return this._reliefUniforms.uEdgeThreshold.value}set edgeThreshold(e){this._reliefUniforms.uEdgeThreshold.value=e}constructor(e){const{reliefDepth:a=.6,stoneTexture:n=.4,smoothness:r=.2,brightness:i=1.2,lightAngle:o=Math.PI/4,edgeThreshold:s=.3,...l}=e??{};super({transparent:!0,...l}),this._reliefUniforms={uReliefDepth:{value:a},uStoneTexture:{value:n},uSmoothness:{value:r},uBrightness:{value:i},uLightAngle:{value:o},uEdgeThreshold:{value:s}},this.onBeforeCompile=g=>{g.uniforms.uReliefDepth=this._reliefUniforms.uReliefDepth,g.uniforms.uStoneTexture=this._reliefUniforms.uStoneTexture,g.uniforms.uSmoothness=this._reliefUniforms.uSmoothness,g.uniforms.uBrightness=this._reliefUniforms.uBrightness,g.uniforms.uLightAngle=this._reliefUniforms.uLightAngle,g.uniforms.uEdgeThreshold=this._reliefUniforms.uEdgeThreshold,g.fragmentShader=g.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uReliefDepth;
					uniform float uStoneTexture;
					uniform float uSmoothness;
					uniform float uBrightness;
					uniform float uLightAngle;
					uniform float uEdgeThreshold;
				`),g.fragmentShader=g.fragmentShader.replace("#include <map_fragment>",`
					vec2 uv = vMapUv;
					vec2 ts = vec2(
						length(dFdx(vMapUv)),
						length(dFdy(vMapUv))
					);

					// ========== 高度图：亮度作为高度 ==========
					vec4 texel = texture2D(map, uv);
					float height = dot(texel.rgb, vec3(0.299, 0.587, 0.114));

					// ========== Sobel 计算高度梯度 → 假法线 ==========
					${L("uv","ts")}

					// 高度梯度（reliefDepth 控制法线强度）
					float depthScale = uReliefDepth * 4.0;
					float dX = sobelGrad.x * depthScale;
					float dY = sobelGrad.y * depthScale;
					// 从梯度构建假法线，z 越小 → 法线越倾斜 → 浮雕感越强
					vec3 reliefNormal = normalize(vec3(-dX, -dY, 1.0));
					// 平滑系数：将法线向 (0,0,1) 插值，模拟滤波平滑
					reliefNormal = mix(reliefNormal, vec3(0.0, 0.0, 1.0), uSmoothness);

					// ========== 强定向光照 ==========
					float lx = cos(uLightAngle);
					float ly = sin(uLightAngle);
					vec3 lightDir = normalize(vec3(lx, ly, 0.5));
					float NdotL = dot(reliefNormal, lightDir);
					// 硬切光：亮面更亮，暗面更暗（浮雕需要强对比）
					float diffuse = NdotL * 0.5 + 0.5;
					// 用 contrast 压缩中间调，拉开明暗
					diffuse = pow(diffuse, 1.5);
					// 进一步拉开：亮部提亮，暗部压暗
					float lightBright = smoothstep(0.3, 0.9, diffuse);
					float lightDark = smoothstep(0.7, 0.2, diffuse);
					// 组合：亮面 0.9~1.1，暗面 0.3~0.7
					float lightEffect = mix(0.35, 1.05, lightBright) * (1.0 - lightDark * 0.3);

					// ========== 环境遮蔽（凹处更暗） ==========
					// 高度越低（越凹），环境光越少
					float ao = smoothstep(0.1, 0.7, height);
					ao = ao * 0.4 + 0.6;

					// ========== 石刻底色（带色彩变化） ==========
					// 石材基色：暖灰，带微弱的色彩变化
					vec3 stoneBase = vec3(0.72, 0.67, 0.6);
					// 根据高度做微弱的色相偏移（高处偏暖，低处偏冷）
					stoneBase.r += (height - 0.5) * 0.08;
					stoneBase.b -= (height - 0.5) * 0.05;

					// ========== 石刻纹理（粗糙石面质感） ==========
					vec2 stoneUv = uv * 120.0;
					vec3 p3 = fract(vec3(stoneUv.xyx) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float s1 = fract((p3.x + p3.y) * p3.z);
					p3 = fract(vec3(stoneUv.xyx * 1.7) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float s2 = fract((p3.x + p3.y) * p3.z);
					p3 = fract(vec3(stoneUv.xyx * 3.1) * 0.1031);
					p3 += dot(p3, p3.yzx + 33.33);
					float s3 = fract((p3.x + p3.y) * p3.z);
					// 多层叠加，模拟石面粗糙颗粒
					float stoneNoise = s1 * 0.5 + s2 * 0.3 + s3 * 0.2;
					// 石刻纹理：在光照下产生微小的明暗变化
					float stoneLit = stoneNoise * 2.0 - 1.0;
					stoneLit *= uStoneTexture * 0.2;
					// 纹理在暗部更明显（粗糙面散射更多光）
					stoneLit *= (1.0 - lightBright * 0.5);
					// 平滑系数：降低纹理对比度
					stoneLit *= (1.0 - uSmoothness * 0.6);
					stoneBase += vec3(stoneLit * 0.9, stoneLit * 0.85, stoneLit * 0.8);

					// ========== 合成：底色 × 光照 × 环境遮蔽 ==========
					vec3 color = stoneBase * lightEffect * ao;

					// ========== 边缘高光（浮雕棱角处捕捉光线） ==========
					float edgeMag = sqrt(dX * dX + dY * dY);
					// 边缘越陡 → 法线变化越大 → 越像棱角
					float edgeHighlight = smoothstep(0.2, 0.8, edgeMag);
					// 棱角处提亮
					color += vec3(0.08, 0.07, 0.06) * edgeHighlight;

					// ========== 刻痕（深凹处加深） ==========
					float gx = -_tl - 2.0 * _l - _bl + _tr + 2.0 * _r + _br;
					float gy = -_tl - 2.0 * _t - _tr + _bl + 2.0 * _b + _br;
					float edge = sqrt(gx * gx + gy * gy);
					float edgeStrength = smoothstep(uEdgeThreshold * 0.5, uEdgeThreshold, edge);
					// 刻痕：深色凹陷线
					color *= 1.0 - edgeStrength * 0.6;

					// ========== 整体亮度调节 ==========
					color *= uBrightness;

					diffuseColor.rgb = color; diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._reliefUniforms=e._reliefUniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class ge extends S{get warmth(){return this._ghibliUniforms.uWarmth.value}set warmth(e){this._ghibliUniforms.uWarmth.value=e}get saturation(){return this._ghibliUniforms.uSaturation.value}set saturation(e){this._ghibliUniforms.uSaturation.value=e}get softness(){return this._ghibliUniforms.uSoftness.value}set softness(e){this._ghibliUniforms.uSoftness.value=e}get edgeThreshold(){return this._ghibliUniforms.uEdgeThreshold.value}set edgeThreshold(e){this._ghibliUniforms.uEdgeThreshold.value=e}constructor(e){const{warmth:a=.35,saturation:n=.3,softness:r=.2,edgeThreshold:i=.2,...o}=e??{};super({transparent:!0,...o}),this._ghibliUniforms={uWarmth:{value:a},uSaturation:{value:n},uSoftness:{value:r},uEdgeThreshold:{value:i}},this.onBeforeCompile=s=>{s.uniforms.uWarmth=this._ghibliUniforms.uWarmth,s.uniforms.uSaturation=this._ghibliUniforms.uSaturation,s.uniforms.uSoftness=this._ghibliUniforms.uSoftness,s.uniforms.uEdgeThreshold=this._ghibliUniforms.uEdgeThreshold,s.fragmentShader=s.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uWarmth;
					uniform float uSaturation;
					uniform float uSoftness;
					uniform float uEdgeThreshold;
			`),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`
					vec2 uv = vMapUv;
					vec4 texel = texture2D(map, uv);
					vec2 ts = vec2(
						length( dFdx( uv ) ),
						length( dFdy( uv ) )
					);

					// ========== 水彩晕染：柔和多层采样 ==========
					vec3 color = vec3(0.0);
					float totalW = 0.0;

					for ( float i = -1.0; i <= 1.0; i += 1.0 ) {
						for ( float j = -1.0; j <= 1.0; j += 1.0 ) {
							vec2 off = vec2( i, j ) * ts * 1.5;
							off += vec2( i + j, i - j ) * ts * 0.3;
							float w = 1.0 / ( 1.0 + length( vec2( i, j ) ) * 0.8 );
							color += texture2D( map, uv + off ).rgb * w;
							totalW += w;
						}
					}
					color /= totalW;

					// 原始锐利采样与晕染结果混合（控制水彩柔和度）
					color = mix( texel.rgb, color, uSoftness );

					// ========== 高级灰 + 高饱和度 ==========
					float lum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
					vec3 grey = vec3( lum );
					color = mix( grey, color, 1.0 + uSaturation * 0.8 );

					// ========== 暖色滤镜 ==========
					color.r *= 1.0 + uWarmth * 0.1;
					color.g *= 1.0 + uWarmth * 0.04;
					color.b *= 1.0 - uWarmth * 0.06;
					float darkMix = smoothstep( 0.5, 0.0, lum );
					color.r += darkMix * uWarmth * 0.03;
					color.g += darkMix * uWarmth * 0.01;
					color = mix( color, color * 1.06, uWarmth * 0.3 );

					// ========== 轮廓线 ==========
					float tl = dot( texture2D( map, uv + vec2( -ts.x, -ts.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float t  = dot( texture2D( map, uv + vec2( 0.0, -ts.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float tr = dot( texture2D( map, uv + vec2( ts.x, -ts.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float l  = dot( texture2D( map, uv + vec2( -ts.x, 0.0 ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float r  = dot( texture2D( map, uv + vec2( ts.x, 0.0 ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float bl = dot( texture2D( map, uv + vec2( -ts.x, ts.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float b  = dot( texture2D( map, uv + vec2( 0.0, ts.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float br = dot( texture2D( map, uv + vec2( ts.x, ts.y ) ).rgb, vec3( 0.299, 0.587, 0.114 ) );
					float gx = -tl - 2.0 * l - bl + tr + 2.0 * r + br;
					float gy = -tl - 2.0 * t - tr + bl + 2.0 * b + br;
					float edge = sqrt( gx * gx + gy * gy );
					float edgeStrength = smoothstep( uEdgeThreshold * 0.5, uEdgeThreshold * 1.5, edge );
					vec3 lineColor = vec3( 0.18, 0.12, 0.08 );
					color = mix( color, lineColor, edgeStrength * 0.5 );

					diffuseColor.rgb = color;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._ghibliUniforms=e._ghibliUniforms,h(this,e,["visible","opacity","transparent","wireframe","warmth","saturation","softness","edgeThreshold"]),this}}class ve extends v{get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}constructor(e){const{blend:a=1,...n}=e??{};super({transparent:!0,...n}),this._uniforms={uBlend:{value:a}},this.onBeforeCompile=r=>{r.uniforms.uBlend=this._uniforms.uBlend,r.fragmentShader=r.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uBlend;
				`),r.fragmentShader=r.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					// 归一化 ExG: (2G - R - B) / (R + G + B)，亮度无关
					// 典型范围: 水体/裸土 ~-0.05~0.05, 稀疏植被 ~0.1~0.2, 茂密 ~0.25~0.4
					float sum = max(color.r + color.g + color.b, 0.01);
					float exg = (2.0 * color.g - color.r - color.b) / sum;
					float t = clamp(exg * 2.5 + 0.3, 0.0, 1.0);

					// 棕(裸土) → 黄 → 绿(茂密植被) 伪彩色
					vec3 vegColor = mix(
						vec3(0.6, 0.4, 0.2),  // 裸土棕色
						vec3(0.9, 0.8, 0.1),  // 稀疏植被黄色
						smoothstep(0.0, 0.4, t)
					);
					vegColor = mix(vegColor, vec3(0.2, 0.8, 0.2), smoothstep(0.4, 0.8, t));

					vec3 finalColor = mix(color, vegColor, uBlend);

					gl_FragColor.rgb = finalColor;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","blend"]),this}}class de extends v{get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}constructor(e){const{blend:a=1,...n}=e??{};super({transparent:!0,...n}),this._uniforms={uBlend:{value:a}},this.onBeforeCompile=r=>{r.uniforms.uBlend=this._uniforms.uBlend,r.fragmentShader=r.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uBlend;
				`),r.fragmentShader=r.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					// (B - R) / (R + G + B)：水体 B >> R，阴影 B ≈ R
					float sum = max(color.r + color.g + color.b, 0.01);
					float wi = (color.b - color.r) / sum;
					float t = clamp(wi * 3.0 + 0.2, 0.0, 1.0);

					// 棕(陆地) → 浅蓝(浅水) → 深蓝(深水) 伪彩色
					vec3 waterColor = mix(
						vec3(0.6, 0.4, 0.2),  // 陆地棕色
						vec3(0.4, 0.7, 0.9),  // 浅水浅蓝
						smoothstep(0.35, 0.55, t)
					);
					waterColor = mix(waterColor, vec3(0.0, 0.1, 0.4), smoothstep(0.55, 0.8, t));

					vec3 finalColor = mix(color, waterColor, uBlend);

					gl_FragColor.rgb = finalColor;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","blend"]),this}}class pe extends v{get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}constructor(e){const{blend:a=1,...n}=e??{};super({transparent:!0,...n}),this._uniforms={uBlend:{value:a}},this.onBeforeCompile=r=>{r.uniforms.uBlend=this._uniforms.uBlend,r.fragmentShader=r.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uBlend;
				`),r.fragmentShader=r.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					float sum = max(color.r + color.g + color.b, 0.01);

					// 亮度范围：smoothstep 双端裁切，压制过暗(水体)和过亮(冰雪)
					float brightScore = smoothstep(0.4, 0.8, sum) - smoothstep(1.8, 2.5, sum);
					brightScore = max(0.0, brightScore);

					// 灰度因子：R≈G≈B 为 1（纯灰建筑），彩色表面偏低
					float cMax = max(color.r, max(color.g, color.b));
					float cMin = min(color.r, min(color.g, color.b));
					float grayScore = 1.0 - (cMax - cMin) / max(cMax, 0.01);

					// 非植被惩罚
					float veg = max(0.0, (color.g - max(color.r, color.b)) / sum);
					float noVeg = max(0.0, 1.0 - veg * 6.0);

					// 非水体惩罚
					float water = max(0.0, (color.b - max(color.r, color.g)) / sum);
					float noWater = max(0.0, 1.0 - water * 6.0);

					// 沙漠抑制：G/B > 1.1 的暖色调（沙漠、裸土），灰色建筑 G/B≈1 无影响
					float warmRatio = color.g / max(color.b, 0.01);
					float desertPenalty = max(0.35, 1.0 - max(0.0, warmRatio - 1.1) * 5.0);

					float building = brightScore * grayScore * desertPenalty * noVeg * noWater;
					float t = clamp(building, 0.0, 1.0);

					// 绿(植被) → 黄(混合区) → 红棕(建筑密集区) 伪彩色
					vec3 urbanColor = mix(
						vec3(0.1, 0.7, 0.1),  // 植被绿色
						vec3(0.9, 0.8, 0.1),  // 混合区黄色
						smoothstep(0.2, 0.5, t)
					);
					urbanColor = mix(urbanColor, vec3(0.7, 0.2, 0.1), smoothstep(0.5, 0.8, t));

					vec3 finalColor = mix(color, urbanColor, uBlend);

					gl_FragColor.rgb = finalColor;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","blend"]),this}}class _e extends v{get threshold(){return this._uniforms.uThreshold.value}set threshold(e){this._uniforms.uThreshold.value=e}get intensity(){return this._uniforms.uIntensity.value}set intensity(e){this._uniforms.uIntensity.value=e}get blurRadius(){return this._uniforms.uBlurRadius.value}set blurRadius(e){this._uniforms.uBlurRadius.value=e}constructor(e){const{threshold:a=.7,intensity:n=.5,blurRadius:r=2,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uThreshold:{value:a},uIntensity:{value:n},uBlurRadius:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uThreshold=this._uniforms.uThreshold,o.uniforms.uIntensity=this._uniforms.uIntensity,o.uniforms.uBlurRadius=this._uniforms.uBlurRadius,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uThreshold;
					uniform float uIntensity;
					uniform float uBlurRadius;
				`),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = gl_FragColor.rgb;
				vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 ) * uBlurRadius;

					// 提取亮区
					float lum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
					float bright = smoothstep( uThreshold, uThreshold + 0.1, lum );

					// 3x3 Gaussian 模糊亮区（9 次采样）
					vec3 bloom = vec3( 0.0 );
					bloom += 1.0 * texture2D( map, vMapUv + vec2( -ts.x, -ts.y ) ).rgb;
					bloom += 2.0 * texture2D( map, vMapUv + vec2( 0.0, -ts.y ) ).rgb;
					bloom += 1.0 * texture2D( map, vMapUv + vec2(  ts.x, -ts.y ) ).rgb;
					bloom += 2.0 * texture2D( map, vMapUv + vec2( -ts.x, 0.0 ) ).rgb;
					bloom += 4.0 * color;
					bloom += 2.0 * texture2D( map, vMapUv + vec2(  ts.x, 0.0 ) ).rgb;
					bloom += 1.0 * texture2D( map, vMapUv + vec2( -ts.x, ts.y ) ).rgb;
					bloom += 2.0 * texture2D( map, vMapUv + vec2( 0.0, ts.y ) ).rgb;
					bloom += 1.0 * texture2D( map, vMapUv + vec2(  ts.x, ts.y ) ).rgb;
					bloom /= 16.0;

				// 叠加泛光
				vec3 bloomColor = color + bright * bloom * uIntensity;

				gl_FragColor.rgb = clamp( bloomColor, 0.0, 1.0 );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","threshold","intensity","blurRadius"]),this}}class xe extends v{get strength(){return this._uniforms.uStrength.value}set strength(e){this._uniforms.uStrength.value=e}get radius(){return this._uniforms.uRadius.value}set radius(e){this._uniforms.uRadius.value=e}constructor(e){const{strength:a=1,radius:n=3,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uStrength:{value:a},uRadius:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uStrength=this._uniforms.uStrength,i.uniforms.uRadius=this._uniforms.uRadius,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uStrength;
					uniform float uRadius;
				`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = gl_FragColor.rgb;
				vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 ) * uRadius;

				// 采样 4×4=16 个点，统计局部亮度范围
				float centerLum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
					float lumMin = centerLum;
					float lumMax = centerLum;

					for ( int y = -2; y <= 1; y++ ) {
						for ( int x = -2; x <= 1; x++ ) {
							vec2 off = vec2( float( x ), float( y ) ) * ts;
							float lum = dot( texture2D( map, vMapUv + off ).rgb, vec3( 0.299, 0.587, 0.114 ) );
							lumMin = min( lumMin, lum );
							lumMax = max( lumMax, lum );
						}
					}

					// 局部对比度拉伸
					float range = lumMax - lumMin;
					float stretched = ( range > 0.01 )
						? smoothstep( lumMin, lumMax, centerLum )
						: centerLum;

					// 混合原图和均衡化结果
				vec3 eqColor = color * ( stretched / ( centerLum + 0.001 ) );
				vec3 finalColor = mix( color, clamp( eqColor, 0.0, 1.0 ), uStrength );

				gl_FragColor.rgb = finalColor;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","strength","radius"]),this}}class Se extends v{get radius(){return this._uniforms.uRadius.value}set radius(e){this._uniforms.uRadius.value=e}get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}constructor(e){const{radius:a=3,blend:n=.8,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uRadius:{value:a},uBlend:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uRadius=this._uniforms.uRadius,i.uniforms.uBlend=this._uniforms.uBlend,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uRadius;
					uniform float uBlend;
				`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
				vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );

					// Kuwahara: 4 象限均值/方差，取方差最小的均值
					int r = int( max( uRadius, 1.0 ) );

					// 象限 0: 左上 (NW)
					vec3 m0 = vec3( 0.0 ); float v0 = 0.0; float n0 = 0.0;
					// 象限 1: 右上 (NE)
					vec3 m1 = vec3( 0.0 ); float v1 = 0.0; float n1 = 0.0;
					// 象限 2: 左下 (SW)
					vec3 m2 = vec3( 0.0 ); float v2 = 0.0; float n2 = 0.0;
					// 象限 3: 右下 (SE)
					vec3 m3 = vec3( 0.0 ); float v3 = 0.0; float n3 = 0.0;

					for ( int y = -4; y <= 0; y++ ) {
						for ( int x = -4; x <= 0; x++ ) {
							if ( abs( y ) > r || abs( x ) > r ) continue;
							vec2 off = vec2( float( x ), float( y ) ) * ts;
							vec3 s = texture2D( map, vMapUv + off ).rgb;

							// NW
							m0 += s; n0 += 1.0;
							// NE (mirror x)
							vec2 offNE = vec2( -float( x ), float( y ) ) * ts;
							m1 += texture2D( map, vMapUv + offNE ).rgb; n1 += 1.0;
							// SW (mirror y)
							vec2 offSW = vec2( float( x ), -float( y ) ) * ts;
							m2 += texture2D( map, vMapUv + offSW ).rgb; n2 += 1.0;
							// SE (mirror both)
							vec2 offSE = vec2( -float( x ), -float( y ) ) * ts;
							m3 += texture2D( map, vMapUv + offSE ).rgb; n3 += 1.0;
						}
					}

					m0 /= max( n0, 1.0 ); m1 /= max( n1, 1.0 );
					m2 /= max( n2, 1.0 ); m3 /= max( n3, 1.0 );

					// 计算方差
					for ( int y = -4; y <= 0; y++ ) {
						for ( int x = -4; x <= 0; x++ ) {
							if ( abs( y ) > r || abs( x ) > r ) continue;
							vec2 off = vec2( float( x ), float( y ) ) * ts;
							vec3 s = texture2D( map, vMapUv + off ).rgb;

							vec3 d0 = s - m0; v0 += dot( d0, d0 );
							vec2 offNE = vec2( -float( x ), float( y ) ) * ts;
							vec3 sNE = texture2D( map, vMapUv + offNE ).rgb;
							vec3 d1 = sNE - m1; v1 += dot( d1, d1 );
							vec2 offSW = vec2( float( x ), -float( y ) ) * ts;
							vec3 sSW = texture2D( map, vMapUv + offSW ).rgb;
							vec3 d2 = sSW - m2; v2 += dot( d2, d2 );
							vec2 offSE = vec2( -float( x ), -float( y ) ) * ts;
							vec3 sSE = texture2D( map, vMapUv + offSE ).rgb;
							vec3 d3 = sSE - m3; v3 += dot( d3, d3 );
						}
					}

					// 取方差最小的象限均值
					float minVar = min( min( v0, v1 ), min( v2, v3 ) );
					vec3 result = ( v0 == minVar ) ? m0
						: ( v1 == minVar ) ? m1
						: ( v2 == minVar ) ? m2
						: m3;

					// 在 PBR 光照结果上混合 Kuwahara 效果
				gl_FragColor.rgb = mix(gl_FragColor.rgb, result, uBlend);
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","radius","blend"]),this}}class ye extends v{get shadow(){return this._uniforms.uShadow.value}set shadow(e){this._uniforms.uShadow.value=e}get shadowMid(){return this._uniforms.uShadowMid.value}set shadowMid(e){this._uniforms.uShadowMid.value=e}get mid(){return this._uniforms.uMid.value}set mid(e){this._uniforms.uMid.value=e}get midHighlight(){return this._uniforms.uMidHighlight.value}set midHighlight(e){this._uniforms.uMidHighlight.value=e}get highlight(){return this._uniforms.uHighlight.value}set highlight(e){this._uniforms.uHighlight.value=e}constructor(e){const{shadow:a=new c(0,0,0),shadowMid:n=new c(.25,.1,.35),mid:r=new c(.5,.5,.5),midHighlight:i=new c(.9,.6,.2),highlight:o=new c(1,1,1),...s}=e??{};super({transparent:!0,...s}),this._uniforms={uShadow:{value:a},uShadowMid:{value:n},uMid:{value:r},uMidHighlight:{value:i},uHighlight:{value:o}},this.onBeforeCompile=l=>{l.uniforms.uShadow=this._uniforms.uShadow,l.uniforms.uShadowMid=this._uniforms.uShadowMid,l.uniforms.uMid=this._uniforms.uMid,l.uniforms.uMidHighlight=this._uniforms.uMidHighlight,l.uniforms.uHighlight=this._uniforms.uHighlight,l.fragmentShader=l.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform vec3 uShadow;
					uniform vec3 uShadowMid;
					uniform vec3 uMid;
					uniform vec3 uMidHighlight;
					uniform vec3 uHighlight;
				`),l.fragmentShader=l.fragmentShader.replace("#include <dithering_fragment>",`
				float lum = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) );

					// 5 色标渐变映射
					vec3 color = uShadow;
					color = mix( color, uShadowMid, smoothstep( 0.0, 0.25, lum ) );
					color = mix( color, uMid, smoothstep( 0.25, 0.5, lum ) );
					color = mix( color, uMidHighlight, smoothstep( 0.5, 0.75, lum ) );
					color = mix( color, uHighlight, smoothstep( 0.75, 1.0, lum ) );

				gl_FragColor.rgb = color;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class Ce extends v{get hueCenter(){return this._uniforms.uHueCenter.value}set hueCenter(e){this._uniforms.uHueCenter.value=e}get hueRange(){return this._uniforms.uHueRange.value}set hueRange(e){this._uniforms.uHueRange.value=e}get saturation(){return this._uniforms.uSaturation.value}set saturation(e){this._uniforms.uSaturation.value=e}constructor(e){const{hueCenter:a=120,hueRange:n=30,saturation:r=1,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uHueCenter:{value:a},uHueRange:{value:n},uSaturation:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uHueCenter=this._uniforms.uHueCenter,o.uniforms.uHueRange=this._uniforms.uHueRange,o.uniforms.uSaturation=this._uniforms.uSaturation,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uHueCenter;
					uniform float uHueRange;
					uniform float uSaturation;

					// RGB→HSV 色相提取
					float getHue( vec3 c ) {
						float cMax = max( c.r, max( c.g, c.b ) );
						float cMin = min( c.r, min( c.g, c.b ) );
						float d = cMax - cMin;
						if ( d < 0.001 ) return 0.0;
						float h;
						if ( cMax == c.r ) h = ( c.g - c.b ) / d;
						else if ( cMax == c.g ) h = 2.0 + ( c.b - c.r ) / d;
						else h = 4.0 + ( c.r - c.g ) / d;
						h *= 60.0;
						if ( h < 0.0 ) h += 360.0;
						return h;
					}
				`),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = gl_FragColor.rgb;

				// 灰度
				float gray = dot( color, vec3( 0.299, 0.587, 0.114 ) );
				vec3 grayColor = vec3( gray );

				// 色相距离（考虑环绕）
				float hue = getHue( color );
				float dist = abs( hue - uHueCenter );
				if ( dist > 180.0 ) dist = 360.0 - dist;

				// 在容差范围内保留色彩
				float keep = 1.0 - smoothstep( uHueRange * 0.6, uHueRange, dist );
				vec3 satAdjusted = mix( grayColor, color, uSaturation );
				color = mix( grayColor, satAdjusted, keep );

				gl_FragColor.rgb = color;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","hueCenter","hueRange","saturation"]),this}}class be extends v{get levels(){return this._uniforms.uLevels.value}set levels(e){this._uniforms.uLevels.value=e}get edgeThreshold(){return this._uniforms.uEdgeThreshold.value}set edgeThreshold(e){this._uniforms.uEdgeThreshold.value=e}get edgeColor(){return this._uniforms.uEdgeColor.value}set edgeColor(e){this._uniforms.uEdgeColor.value=e}constructor(e){const{levels:a=4,edgeThreshold:n=.6,edgeColor:r=new c(0,0,0),...i}=e??{};super({transparent:!0,...i}),this._uniforms={uLevels:{value:a},uEdgeThreshold:{value:n},uEdgeColor:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uLevels=this._uniforms.uLevels,o.uniforms.uEdgeThreshold=this._uniforms.uEdgeThreshold,o.uniforms.uEdgeColor=this._uniforms.uEdgeColor,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uLevels;
					uniform float uEdgeThreshold;
					uniform vec3 uEdgeColor;
				`),o.fragmentShader=o.fragmentShader.replace("#include <dithering_fragment>",`
				vec3 color = gl_FragColor.rgb;
				vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );

				// 色阶量化
				float levels = max( uLevels, 2.0 );
				vec3 quantized = floor( color * levels + 0.5 ) / levels;

				// Sobel 轮廓线检测
				${B()}
				float edge = smoothstep( uEdgeThreshold * 0.5, uEdgeThreshold, sobelEdge );
				color = mix( quantized, uEdgeColor, edge );

				gl_FragColor.rgb = color;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","levels","edgeThreshold"]),this}}class we extends S{get time(){return this._uniforms.uTime.value}set time(e){this._uniforms.uTime.value=e}get strength(){return this._uniforms.uStrength.value}set strength(e){this._uniforms.uStrength.value=e}get frequency(){return this._uniforms.uFrequency.value}set frequency(e){this._uniforms.uFrequency.value=e}get speed(){return this._uniforms.uSpeed.value}set speed(e){this._uniforms.uSpeed.value=e}constructor(e){const{strength:a=.02,frequency:n=8,speed:r=2,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uTime:{value:0},uStrength:{value:a},uFrequency:{value:n},uSpeed:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uTime=this._uniforms.uTime,o.uniforms.uStrength=this._uniforms.uStrength,o.uniforms.uFrequency=this._uniforms.uFrequency,o.uniforms.uSpeed=this._uniforms.uSpeed,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uTime;
					uniform float uStrength;
					uniform float uFrequency;
					uniform float uSpeed;

					// 简易 2D 噪声
					float hash21( vec2 p ) {
						p = fract( p * vec2( 234.34, 435.345 ) );
						p += dot( p, p + 34.23 );
						return fract( p.x * p.y );
					}
					float noise2D( vec2 p ) {
						vec2 i = floor( p );
						vec2 f = fract( p );
						f = f * f * ( 3.0 - 2.0 * f );
						float a = hash21( i );
						float b = hash21( i + vec2( 1.0, 0.0 ) );
						float c = hash21( i + vec2( 0.0, 1.0 ) );
						float d = hash21( i + vec2( 1.0, 1.0 ) );
						return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
					}
				`),o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>",`
					float t = uTime * uSpeed;
					vec2 uv = vMapUv;

					// 双层噪声扰动
					float n1 = noise2D( uv * uFrequency + vec2( t, 0.0 ) );
					float n2 = noise2D( uv * uFrequency + vec2( 0.0, t ) + 5.0 );
					vec2 distortion = vec2( n1 - 0.5, n2 - 0.5 ) * uStrength;

					vec4 texel = texture2D( map, uv + distortion );

					diffuseColor.rgb = texel.rgb;
					diffuseColor.a = opacity * texel.a;
				`)}}onBeforeRender(e,a,n,r,i,o){this._uniforms.uTime.value=performance.now()*.001}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","strength","frequency","speed"]),this}}class Me extends v{get fogColor(){return this._uniforms.uFogColor.value}set fogColor(e){this._uniforms.uFogColor.value=e}get near(){return this._uniforms.uNear.value}set near(e){this._uniforms.uNear.value=e}get far(){return this._uniforms.uFar.value}set far(e){this._uniforms.uFar.value=e}get density(){return this._uniforms.uDensity.value}set density(e){this._uniforms.uDensity.value=e}constructor(e){const{fogColor:a=new c(.78,.82,.88),near:n=100,far:r=5e3,density:i=1,...o}=e??{};super({transparent:!0,...o}),this._uniforms={uFogColor:{value:a},uNear:{value:n},uFar:{value:r},uDensity:{value:i}},this.onBeforeCompile=s=>{s.uniforms.uFogColor=this._uniforms.uFogColor,s.uniforms.uNear=this._uniforms.uNear,s.uniforms.uFar=this._uniforms.uFar,s.uniforms.uDensity=this._uniforms.uDensity,s.fragmentShader=s.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform vec3 uFogColor;
					uniform float uNear;
					uniform float uFar;
					uniform float uDensity;
				`),s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					// vViewPosition 是相机空间位置（vec3），取长度得距离
					float dist = length( vViewPosition );
					float fog = clamp( ( dist - uNear ) / ( uFar - uNear ), 0.0, 1.0 );
					fog = pow( fog, uDensity );

					vec3 fogColor = mix( color, uFogColor, fog );

					gl_FragColor.rgb = fogColor;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","near","far","density"]),this}}class De extends v{constructor(e){const{atmosphereColor:a=new c(.6,.73,.89),near:n=200,far:r=8e3,strength:i=.6,brightnessFade:o=.3,...s}=e??{};super({transparent:!0,...s}),this._nearFactor=.05,this._farFactor=3,this._autoDistance=!0,this._uniforms={uAtmosphereColor:{value:a},uNear:{value:n},uFar:{value:r},uStrength:{value:i},uBrightnessFade:{value:o}},this.onBeforeCompile=l=>{l.uniforms.uAtmosphereColor=this._uniforms.uAtmosphereColor,l.uniforms.uNear=this._uniforms.uNear,l.uniforms.uFar=this._uniforms.uFar,l.uniforms.uStrength=this._uniforms.uStrength,l.uniforms.uBrightnessFade=this._uniforms.uBrightnessFade,l.vertexShader=l.vertexShader.replace("void main() {",`
					varying float vAerialDepth;
					void main() {
				`),l.vertexShader=l.vertexShader.replace("#include <project_vertex>",`
					#include <project_vertex>
					vec4 worldPos = modelMatrix * vec4( position, 1.0 );
					vAerialDepth = length( worldPos.xyz - cameraPosition );
				`),l.fragmentShader=l.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform vec3 uAtmosphereColor;
					uniform float uNear;
					uniform float uFar;
					uniform float uStrength;
					uniform float uBrightnessFade;
					varying float vAerialDepth;
				`),l.fragmentShader=l.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					float t = clamp( ( vAerialDepth - uNear ) / ( uFar - uNear ), 0.0, 1.0 );
					float atmospheric = t * uStrength;

					// 大气散射：偏蓝 + 亮度降低
					color = mix( color, uAtmosphereColor, atmospheric );
					color = mix( color, color * ( 1.0 - uBrightnessFade * t ), t );

					gl_FragColor.rgb = color;
				`)}}get atmosphereColor(){return this._uniforms.uAtmosphereColor.value}set atmosphereColor(e){this._uniforms.uAtmosphereColor.value=e}get nearFactor(){return this._nearFactor}set nearFactor(e){this._nearFactor=e}get farFactor(){return this._farFactor}set farFactor(e){this._farFactor=e}get autoDistance(){return this._autoDistance}set autoDistance(e){this._autoDistance=e}get near(){return this._uniforms.uNear.value}set near(e){this._uniforms.uNear.value=e}get far(){return this._uniforms.uFar.value}set far(e){this._uniforms.uFar.value=e}get strength(){return this._uniforms.uStrength.value}set strength(e){this._uniforms.uStrength.value=e}get brightnessFade(){return this._uniforms.uBrightnessFade.value}set brightnessFade(e){this._uniforms.uBrightnessFade.value=e}onBeforeRender(e,a,n,r,i){if(!this._autoDistance)return;const s=n.position.length();this._uniforms.uNear.value=s*this._nearFactor,this._uniforms.uFar.value=s*this._farFactor}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","near","far","strength","brightnessFade"]),this._nearFactor=e._nearFactor,this._farFactor=e._farFactor,this._autoDistance=e._autoDistance,this}}class Ue extends S{get time(){return this._uniforms.uTime.value}set time(e){this._uniforms.uTime.value=e}get tintStrength(){return this._uniforms.uTintStrength.value}set tintStrength(e){this._uniforms.uTintStrength.value=e}get warpStrength(){return this._uniforms.uWarpStrength.value}set warpStrength(e){this._uniforms.uWarpStrength.value=e}get causticIntensity(){return this._uniforms.uCausticIntensity.value}set causticIntensity(e){this._uniforms.uCausticIntensity.value=e}get causticScale(){return this._uniforms.uCausticScale.value}set causticScale(e){this._uniforms.uCausticScale.value=e}constructor(e){const{tintStrength:a=.5,warpStrength:n=.004,causticIntensity:r=.15,causticScale:i=10,...o}=e??{};super({transparent:!0,...o}),this._uniforms={uTime:{value:0},uTintStrength:{value:a},uWarpStrength:{value:n},uCausticIntensity:{value:r},uCausticScale:{value:i}},this.onBeforeCompile=s=>{s.uniforms.uTime=this._uniforms.uTime,s.uniforms.uTintStrength=this._uniforms.uTintStrength,s.uniforms.uWarpStrength=this._uniforms.uWarpStrength,s.uniforms.uCausticIntensity=this._uniforms.uCausticIntensity,s.uniforms.uCausticScale=this._uniforms.uCausticScale,s.fragmentShader=s.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uTime;
					uniform float uTintStrength;
					uniform float uWarpStrength;
					uniform float uCausticIntensity;
					uniform float uCausticScale;

					float caustics( vec2 uv, float t ) {
						float c = 0.0;
						vec2 p = uv * 6.28318;
						c += sin( p.x + sin( p.y + t * 0.7 ) );
						c += sin( p.y + sin( p.x + t * 0.5 ) );
						c = abs( c ) * 0.5;
						return c * c;
					}
				`),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`
					float t = uTime;
					vec2 uv = vMapUv;

					// 折射扭曲
					float w = uWarpStrength;
					vec2 warpUv = uv + vec2(
						sin( uv.y * 20.0 + t * 1.3 ) * w,
						sin( uv.x * 20.0 + t * 1.1 ) * w
					);

					vec4 texel = texture2D( map, warpUv );

					// 蓝绿色偏（水体吸收红光）
					vec3 waterTint = vec3( -0.15, 0.05, 0.15 ) * uTintStrength;
					vec3 color = texel.rgb + waterTint;

					// 焦散光斑
					float caustic = caustics( warpUv * uCausticScale, t );
					color += caustic * uCausticIntensity;

					diffuseColor.rgb = color;
					diffuseColor.a = opacity * texel.a;
				`)}}onBeforeRender(e,a,n,r,i,o){this._uniforms.uTime.value=performance.now()*.001}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","tintStrength","warpStrength","causticIntensity","causticScale"]),this}}class tt extends S{constructor(e){super({transparent:!0,...e}),this._uniforms={uNear:{value:.1},uFar:{value:1e3}},this.onBeforeRender=(a,n,r)=>{r instanceof Ne&&(this._uniforms.uNear.value=r.near,this._uniforms.uFar.value=r.far)},this.onBeforeCompile=a=>{a.uniforms.uNear=this._uniforms.uNear,a.uniforms.uFar=this._uniforms.uFar,a.vertexShader=a.vertexShader.replace("void main() {",`
					varying float vDepth;
					void main() {
				`),a.vertexShader=a.vertexShader.replace("#include <project_vertex>",`
					#include <project_vertex>
					vec4 worldPos = modelMatrix * vec4( position, 1.0 );
					vDepth = length( worldPos.xyz - cameraPosition );
				`),a.fragmentShader=a.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uNear;
					uniform float uFar;
					varying float vDepth;

					// Jet 色带：蓝 → 青 → 绿 → 黄 → 红
					vec3 jetColorMap( float t ) {
						vec3 a = vec3( 0.5, 0.5, 0.5 );
						vec3 b = vec3( 0.5, 0.5, 0.5 );
						vec3 c = vec3( 1.0, 1.0, 1.0 );
						vec3 d = vec3( 0.0, 0.33, 0.67 );
						vec3 color = a + b * cos( 6.28318 * ( c * t + d ) );
						return clamp( color, 0.0, 1.0 );
					}
				`),a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",`
					float t = clamp( ( vDepth - uNear ) / ( uFar - uNear ), 0.0, 1.0 );
					vec3 color = jetColorMap( 1.0 - t );

					diffuseColor.rgb = color;
					diffuseColor.a = opacity;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe"]),this}}class Te extends v{get maxSlope(){return this._uniforms.uMaxSlope.value}set maxSlope(e){this._uniforms.uMaxSlope.value=e}get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}constructor(e){const{maxSlope:a=60,blend:n=.3,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uMaxSlope:{value:a},uBlend:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uMaxSlope=this._uniforms.uMaxSlope,i.uniforms.uBlend=this._uniforms.uBlend,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uMaxSlope;
					uniform float uBlend;
				`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
					// view space → world space（Y-up，不随相机旋转）
					vec3 n = normalize( normal * mat3( viewMatrix ) );
					// 坡度角 = 法线与 Y 轴夹角
					float slopeAngle = acos( clamp( n.y, 0.0, 1.0 ) ) * 57.2958;
					float t = clamp( slopeAngle / uMaxSlope, 0.0, 1.0 );

					vec3 slopeColor;
					if ( t < 0.5 ) {
						slopeColor = mix( vec3( 0.2, 0.7, 0.2 ), vec3( 1.0, 0.85, 0.1 ), t * 2.0 );
					} else {
						slopeColor = mix( vec3( 1.0, 0.85, 0.1 ), vec3( 0.9, 0.1, 0.05 ), ( t - 0.5 ) * 2.0 );
					}

					// 在 PBR 光照结果上叠加
					gl_FragColor.rgb = mix( gl_FragColor.rgb, slopeColor, 1.0 - uBlend );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","maxSlope","blend"]),this}}class Be extends v{get blend(){return this._uniforms.uBlend.value}set blend(e){this._uniforms.uBlend.value=e}get slopeThreshold(){return this._uniforms.uSlopeThreshold.value}set slopeThreshold(e){this._uniforms.uSlopeThreshold.value=e}constructor(e){const{blend:a=.3,slopeThreshold:n=5,...r}=e??{};super({transparent:!0,...r}),this._uniforms={uBlend:{value:a},uSlopeThreshold:{value:n}},this.onBeforeCompile=i=>{i.uniforms.uBlend=this._uniforms.uBlend,i.uniforms.uSlopeThreshold=this._uniforms.uSlopeThreshold,i.fragmentShader=i.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uBlend;
					uniform float uSlopeThreshold;

					vec3 hsv2rgb( float h, float s, float v ) {
						vec3 c = vec3( h, s, v );
						vec3 rgb = clamp( abs( mod( c.x * 6.0 + vec3( 0.0, 4.0, 2.0 ), 6.0 ) - 3.0 ) - 1.0, 0.0, 1.0 );
						return c.z * mix( vec3( 1.0 ), rgb, c.y );
					}
				`),i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 n = normalize( normal * mat3( viewMatrix ) );
					float slopeAngle = acos( clamp( n.y, 0.0, 1.0 ) ) * 57.2958;

					float aspect = atan( n.x, n.z );
					float aspectDeg = mod( aspect * 57.2958 + 360.0, 360.0 );
					float hue = aspectDeg / 360.0;
					vec3 aspectColor = hsv2rgb( hue, 0.8, 0.9 );

					float factor = smoothstep( uSlopeThreshold - 5.0, uSlopeThreshold + 5.0, slopeAngle );

					// 在 PBR 光照结果上叠加
					gl_FragColor.rgb = mix( gl_FragColor.rgb, aspectColor, factor * ( 1.0 - uBlend ) );
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","blend","slopeThreshold"]),this}}class Fe extends v{get minHeight(){return this._uniforms.uMinHeight.value}set minHeight(e){this._uniforms.uMinHeight.value=e}get maxHeight(){return this._uniforms.uMaxHeight.value}set maxHeight(e){this._uniforms.uMaxHeight.value=e}get snowLineHeight(){return this._uniforms.uSnowLineHeight.value}set snowLineHeight(e){this._uniforms.uSnowLineHeight.value=e}get sunElevation(){return this._uniforms.uSunElevation.value}set sunElevation(e){this._uniforms.uSunElevation.value=e}get sunAzimuth(){return this._uniforms.uSunAzimuth.value}set sunAzimuth(e){this._uniforms.uSunAzimuth.value=e}get snowColor(){return this._uniforms.uSnowColor.value}set snowColor(e){this._uniforms.uSnowColor.value=e}get rockColor(){return this._uniforms.uRockColor.value}set rockColor(e){this._uniforms.uRockColor.value=e}get grassColor(){return this._uniforms.uGrassColor.value}set grassColor(e){this._uniforms.uGrassColor.value=e}get goldColor(){return this._uniforms.uGoldColor.value}set goldColor(e){this._uniforms.uGoldColor.value=e}get textureBlend(){return this._uniforms.uTextureBlend.value}set textureBlend(e){this._uniforms.uTextureBlend.value=e}get goldIntensity(){return this._uniforms.uGoldIntensity.value}set goldIntensity(e){this._uniforms.uGoldIntensity.value=e}constructor(e){const{minHeight:a=0,maxHeight:n=8848,snowLineHeight:r=5e3,sunElevation:i=.7,sunAzimuth:o=2.5,snowColor:s=new c(.95,.95,1),rockColor:l=new c(.5,.4,.3),grassColor:g=new c(.3,.6,.2),goldColor:u=new c(1,.8,.2),textureBlend:t=.7,goldIntensity:m=.8,...F}=e??{};super({transparent:!0,...F}),this._uniforms={uMinHeight:{value:a},uMaxHeight:{value:n},uSnowLineHeight:{value:r},uSunElevation:{value:i},uSunAzimuth:{value:o},uSnowColor:{value:s},uRockColor:{value:l},uGrassColor:{value:g},uGoldColor:{value:u},uTextureBlend:{value:t},uGoldIntensity:{value:m}},this.onBeforeCompile=p=>{p.uniforms.uMinHeight=this._uniforms.uMinHeight,p.uniforms.uMaxHeight=this._uniforms.uMaxHeight,p.uniforms.uSnowLineHeight=this._uniforms.uSnowLineHeight,p.uniforms.uSunElevation=this._uniforms.uSunElevation,p.uniforms.uSunAzimuth=this._uniforms.uSunAzimuth,p.uniforms.uSnowColor=this._uniforms.uSnowColor,p.uniforms.uRockColor=this._uniforms.uRockColor,p.uniforms.uGrassColor=this._uniforms.uGrassColor,p.uniforms.uGoldColor=this._uniforms.uGoldColor,p.uniforms.uTextureBlend=this._uniforms.uTextureBlend,p.uniforms.uGoldIntensity=this._uniforms.uGoldIntensity,p.vertexShader=p.vertexShader.replace("#include <logdepthbuf_pars_vertex>",`
					varying float vHeight;
					#include <logdepthbuf_pars_vertex>
				`),p.vertexShader=p.vertexShader.replace("#include <project_vertex>",`
					#include <project_vertex>
					vHeight = position.z;
				`),p.fragmentShader=p.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					varying float vHeight;
					uniform float uMinHeight;
					uniform float uMaxHeight;
					uniform float uSnowLineHeight;
					uniform float uSunElevation;
					uniform float uSunAzimuth;
					uniform vec3 uSnowColor;
					uniform vec3 uRockColor;
					uniform vec3 uGrassColor;
					uniform vec3 uGoldColor;
					uniform float uTextureBlend;
					uniform float uGoldIntensity;

					// 平滑过渡函数（三次 Hermite 曲线）
					float smoothBlend(float edge0, float edge1, float x) {
						float t = clamp( ( x - edge0 ) / ( edge1 - edge0 ), 0.0, 1.0 );
						return t * t * ( 3.0 - 2.0 * t );
					}
				`),p.fragmentShader=p.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					// 1. 高程分层着色
					float normalizedHeight = clamp( ( vHeight - uMinHeight ) / max( uMaxHeight - uMinHeight, 1.0 ), 0.0, 1.0 );
					vec3 elevationColor;

					// 各高度段的归一化分界阈值（相对于雪线）
					float snowLineNorm = ( uSnowLineHeight - uMinHeight ) / max( uMaxHeight - uMinHeight, 1.0 );

					if ( normalizedHeight < snowLineNorm - 0.1 ) {
						// 植被区：低于雪线-100m
						elevationColor = uGrassColor;
					} else if ( normalizedHeight < snowLineNorm + 0.1 ) {
						// 过渡区：雪线±100m
						float t = ( normalizedHeight - ( snowLineNorm - 0.1 ) ) / 0.2;
						vec3 mixedColor = mix( uGrassColor, uRockColor, smoothstep( 0.0, 0.5, t ) );
						mixedColor = mix( mixedColor, uSnowColor, smoothstep( 0.5, 1.0, t ) );
						elevationColor = mixedColor;
					} else {
						// 雪线以上：高于雪线+100m
						elevationColor = uSnowColor;
					}

					// 2. 太阳方向 Z-up（瓦片局部）→ Y-up（Three.js 世界）
					float sinEl = sin( uSunElevation );
					float cosEl = cos( uSunElevation );
					vec3 sunDirWorld = normalize( vec3(
						cosEl * sin( uSunAzimuth ),
						sinEl,
						-cosEl * cos( uSunAzimuth )
					) );
					vec3 sunDir = ( viewMatrix * vec4( sunDirWorld, 0.0 ) ).xyz;

					// 3. 计算法线与光照方向的点积
					vec3 N = normalize( vNormal );
					float NdotL = dot( N, sunDir );

					// 4. 金色高光计算
					// 高光强度基于法线与光照方向的点积
					float goldFactor = smoothstep( 0.0, 0.5, NdotL );
					// 高光强度随高度增加，在雪线以上区域最强
					goldFactor *= smoothstep( snowLineNorm - 0.1, snowLineNorm + 0.1, normalizedHeight );

					// 5. 最终颜色混合
					vec3 finalColor = mix( elevationColor, uGoldColor, goldFactor * uGoldIntensity );

					// 6. 与原始影像纹理混合
					vec3 texColor = texture2D( map, vMapUv ).rgb;
					vec3 resultColor = mix( finalColor, texColor, clamp( uTextureBlend, 0.0, 1.0 ) );

					gl_FragColor.rgb = resultColor;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","minHeight","maxHeight","snowLineHeight","sunElevation","sunAzimuth","textureBlend","goldIntensity"]),this}}class Ee extends v{get edgeColor1(){return this._uniforms.uEdgeColor1.value}set edgeColor1(e){this._uniforms.uEdgeColor1.value=e}get edgeColor2(){return this._uniforms.uEdgeColor2.value}set edgeColor2(e){this._uniforms.uEdgeColor2.value=e}get edgeThreshold(){return this._uniforms.uEdgeThreshold.value}set edgeThreshold(e){this._uniforms.uEdgeThreshold.value=e}get edgeIntensity(){return this._uniforms.uEdgeIntensity.value}set edgeIntensity(e){this._uniforms.uEdgeIntensity.value=e}get scanlineFreq(){return this._uniforms.uScanlineFreq.value}set scanlineFreq(e){this._uniforms.uScanlineFreq.value=e}get scanlineIntensity(){return this._uniforms.uScanlineIntensity.value}set scanlineIntensity(e){this._uniforms.uScanlineIntensity.value=e}get tintStrength(){return this._uniforms.uTintStrength.value}set tintStrength(e){this._uniforms.uTintStrength.value=e}get grain(){return this._uniforms.uGrain.value}set grain(e){this._uniforms.uGrain.value=e}constructor(e){const{edgeColor1:a=new c(0,1,1),edgeColor2:n=new c(1,0,1),edgeThreshold:r=.15,edgeIntensity:i=.8,scanlineFreq:o=300,scanlineIntensity:s=.15,tintStrength:l=.6,grain:g=.06,...u}=e??{};super({transparent:!0,...u}),this._uniforms={uEdgeColor1:{value:a},uEdgeColor2:{value:n},uEdgeThreshold:{value:r},uEdgeIntensity:{value:i},uScanlineFreq:{value:o},uScanlineIntensity:{value:s},uTintStrength:{value:l},uGrain:{value:g}},this.onBeforeCompile=t=>{t.uniforms.uEdgeColor1=this._uniforms.uEdgeColor1,t.uniforms.uEdgeColor2=this._uniforms.uEdgeColor2,t.uniforms.uEdgeThreshold=this._uniforms.uEdgeThreshold,t.uniforms.uEdgeIntensity=this._uniforms.uEdgeIntensity,t.uniforms.uScanlineFreq=this._uniforms.uScanlineFreq,t.uniforms.uScanlineIntensity=this._uniforms.uScanlineIntensity,t.uniforms.uTintStrength=this._uniforms.uTintStrength,t.uniforms.uGrain=this._uniforms.uGrain,t.fragmentShader=t.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform vec3 uEdgeColor1;
					uniform vec3 uEdgeColor2;
					uniform float uEdgeThreshold;
					uniform float uEdgeIntensity;
					uniform float uScanlineFreq;
					uniform float uScanlineIntensity;
					uniform float uTintStrength;
					uniform float uGrain;

					float hash21(vec2 p) {
						p = fract(p * vec2(127.1, 311.7));
						p += dot(p, p + 19.19);
						return fract(p.x * p.y);
					}
				`),t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`
					vec3 color = gl_FragColor.rgb;

					float lum = dot(color, vec3(0.299, 0.587, 0.114));

					// ========== 暗底基色 ==========
					vec3 darkBase = color * 0.12;

					// ========== 青品红色调映射 ==========
					// 暗部偏青，亮部偏品红
					vec3 tealTint = vec3(0.0, lum * 0.8, lum * 1.0);
					vec3 magentaTint = vec3(lum * 1.0, lum * 0.1, lum * 0.8);
					float tintMix = smoothstep(0.2, 0.8, lum);
					vec3 tinted = mix(tealTint, magentaTint, tintMix);
					vec3 colorGraded = mix(color, tinted, uTintStrength);

					// ========== 霓虹边缘（Sobel） ==========
					vec2 ts = max(vec2(abs(dFdx(vMapUv.x)), abs(dFdy(vMapUv.y))), 1.0e-6);
					${B()}
					float edgeStrength = smoothstep(uEdgeThreshold * 0.5, uEdgeThreshold, sobelEdge);

					// 辉光扩散
					float glowSum = sobelEdge;
					for (int y = -1; y <= 1; y++) {
						for (int x = -1; x <= 1; x++) {
							if (x == 0 && y == 0) continue;
							vec2 off = vec2(float(x), float(y)) * ts * 3.0;
							glowSum += dot(texture2D(map, vMapUv + off).rgb, vec3(0.299, 0.587, 0.114));
						}
					}
					float glow = glowSum / 9.0;
					float glowStrength = smoothstep(uEdgeThreshold * 0.3, uEdgeThreshold * 1.5, glow) * 0.4;

					// 双色边缘：根据亮度交替青/品红
					vec3 edgeColor = mix(uEdgeColor1, uEdgeColor2, tintMix);
					float edgeAmount = max(edgeStrength, glowStrength) * uEdgeIntensity;

					// ========== 扫描线 ==========
					float scanline = sin(vMapUv.y * uScanlineFreq * 6.28318) * 0.5 + 0.5;
					scanline = pow(scanline, 2.0) * uScanlineIntensity;

					// ========== 胶片颗粒 ==========
					float grainNoise = (hash21(vMapUv * 500.0) - 0.5) * uGrain;

					// ========== 合成 ==========
					// 暗底 + 色调映射
					vec3 result = mix(darkBase, colorGraded, smoothstep(0.05, 0.5, lum));
					// 叠加霓虹边缘
					result += edgeColor * edgeAmount;
					// 扫描线暗化
					result *= (1.0 - scanline);
					// 颗粒
					result += grainNoise;

					gl_FragColor.rgb = clamp(result, 0.0, 1.0);
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","edgeThreshold","edgeIntensity","scanlineFreq","scanlineIntensity","tintStrength","grain"]),this}}class Ge extends S{get pixelDensity(){return this._uniforms.uPixelDensity.value}set pixelDensity(e){this._uniforms.uPixelDensity.value=e}get colorLevels(){return this._uniforms.uColorLevels.value}set colorLevels(e){this._uniforms.uColorLevels.value=e}get dither(){return this._uniforms.uDither.value}set dither(e){this._uniforms.uDither.value=e}constructor(e){const{pixelDensity:a=64,colorLevels:n=8,dither:r=.3,...i}=e??{};super({transparent:!0,...i}),this._uniforms={uPixelDensity:{value:a},uColorLevels:{value:n},uDither:{value:r}},this.onBeforeCompile=o=>{o.uniforms.uPixelDensity=this._uniforms.uPixelDensity,o.uniforms.uColorLevels=this._uniforms.uColorLevels,o.uniforms.uDither=this._uniforms.uDither,o.fragmentShader=o.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uPixelDensity;
					uniform float uColorLevels;
					uniform float uDither;
				`),o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>",`
					// ========== UV 量化：snap 到像素网格 ==========
					vec2 quantizedUV = floor( vMapUv * uPixelDensity + 0.5 ) / uPixelDensity;
					vec4 texel = texture2D( map, quantizedUV );

					// ========== 有序抖动（4x4 Bayer 矩阵） ==========
					float bayer4x4 = 0.0;
					{
						// 用屏幕坐标计算 Bayer 矩阵索引
						vec2 sc = gl_FragCoord.xy;
						int bx = int( mod( sc.x, 4.0 ) );
						int by = int( mod( sc.y, 4.0 ) );
						int idx = bx + by * 4;
						if ( idx == 0 )  bayer4x4 =  0.0 / 16.0;
						else if ( idx == 1 )  bayer4x4 =  8.0 / 16.0;
						else if ( idx == 2 )  bayer4x4 =  2.0 / 16.0;
						else if ( idx == 3 )  bayer4x4 = 10.0 / 16.0;
						else if ( idx == 4 )  bayer4x4 = 12.0 / 16.0;
						else if ( idx == 5 )  bayer4x4 =  4.0 / 16.0;
						else if ( idx == 6 )  bayer4x4 = 14.0 / 16.0;
						else if ( idx == 7 )  bayer4x4 =  6.0 / 16.0;
						else if ( idx == 8 )  bayer4x4 =  3.0 / 16.0;
						else if ( idx == 9 )  bayer4x4 = 11.0 / 16.0;
						else if ( idx == 10 ) bayer4x4 =  1.0 / 16.0;
						else if ( idx == 11 ) bayer4x4 =  9.0 / 16.0;
						else if ( idx == 12 ) bayer4x4 = 15.0 / 16.0;
						else if ( idx == 13 ) bayer4x4 =  7.0 / 16.0;
						else if ( idx == 14 ) bayer4x4 = 13.0 / 16.0;
						else if ( idx == 15 ) bayer4x4 =  5.0 / 16.0;
					}

					// ========== 颜色量化 ==========
					vec3 color = texel.rgb;
					float levels = max( uColorLevels, 2.0 );
					// 抖动偏移后再量化，模拟中间色过渡
					float ditherOffset = ( bayer4x4 - 0.5 ) * uDither / levels;
					vec3 quantized = floor( ( color + ditherOffset ) * levels + 0.5 ) / levels;
					quantized = clamp( quantized, 0.0, 1.0 );

					diffuseColor.rgb = quantized;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","pixelDensity","colorLevels","dither"]),this}}class He extends S{get dotDensity(){return this._uniforms.uDotDensity.value}set dotDensity(e){this._uniforms.uDotDensity.value=e}get dotSharpness(){return this._uniforms.uDotSharpness.value}set dotSharpness(e){this._uniforms.uDotSharpness.value=e}get edgeThreshold(){return this._uniforms.uEdgeThreshold.value}set edgeThreshold(e){this._uniforms.uEdgeThreshold.value=e}get edgeWidth(){return this._uniforms.uEdgeWidth.value}set edgeWidth(e){this._uniforms.uEdgeWidth.value=e}get edgeColor(){return this._uniforms.uEdgeColor.value}set edgeColor(e){this._uniforms.uEdgeColor.value=e}get shadowColor(){return this._uniforms.uShadowColor.value}set shadowColor(e){this._uniforms.uShadowColor.value=e}get saturation(){return this._uniforms.uSaturation.value}set saturation(e){this._uniforms.uSaturation.value=e}get contrast(){return this._uniforms.uContrast.value}set contrast(e){this._uniforms.uContrast.value=e}constructor(e){const{dotDensity:a=40,dotSharpness:n=6,edgeThreshold:r=.15,edgeWidth:i=2,edgeColor:o=new c(0,0,0),shadowColor:s=new c(.1,.05,.2),saturation:l=1.4,contrast:g=1.5,...u}=e??{};super({transparent:!0,...u}),this._uniforms={uDotDensity:{value:a},uDotSharpness:{value:n},uEdgeThreshold:{value:r},uEdgeWidth:{value:i},uEdgeColor:{value:o},uShadowColor:{value:s},uSaturation:{value:l},uContrast:{value:g}},this.onBeforeCompile=t=>{t.uniforms.uDotDensity=this._uniforms.uDotDensity,t.uniforms.uDotSharpness=this._uniforms.uDotSharpness,t.uniforms.uEdgeThreshold=this._uniforms.uEdgeThreshold,t.uniforms.uEdgeWidth=this._uniforms.uEdgeWidth,t.uniforms.uEdgeColor=this._uniforms.uEdgeColor,t.uniforms.uShadowColor=this._uniforms.uShadowColor,t.uniforms.uSaturation=this._uniforms.uSaturation,t.uniforms.uContrast=this._uniforms.uContrast,t.fragmentShader=t.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uDotDensity;
					uniform float uDotSharpness;
					uniform float uEdgeThreshold;
					uniform float uEdgeWidth;
					uniform vec3 uEdgeColor;
					uniform vec3 uShadowColor;
					uniform float uSaturation;
					uniform float uContrast;
				`),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`
					vec4 texel = texture2D( map, vMapUv );
					vec2 ts = max( vec2( abs( dFdx( vMapUv.x ) ), abs( dFdy( vMapUv.y ) ) ), 1.0e-6 );
					vec3 color = texel.rgb;

					// ========== 饱和度增强 ==========
					float lum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
					color = mix( vec3( lum ), color, uSaturation );

					// ========== 对比度增强 ==========
					color = ( color - 0.5 ) * uContrast + 0.5;
					color = clamp( color, 0.0, 1.0 );

					// ========== 半色调网点（Halftone） ==========
					// 用亮度控制网点大小：亮→小点，暗→大点
					float halftoneLum = dot( color, vec3( 0.299, 0.587, 0.114 ) );
					// 网点 UV 坐标
					vec2 dotUV = vMapUv * uDotDensity;
					// 交错排列（漫画经典 45° 网点）
					float row = floor( dotUV.y );
					if ( mod( row, 2.0 ) > 0.5 ) {
						dotUV.x += 0.5;
					}
					// 网点中心距
					vec2 cellId = floor( dotUV );
					vec2 cellUV = fract( dotUV ) - 0.5;
					// 网点半径：亮度越低半径越大
					float radius = ( 1.0 - halftoneLum ) * 0.5;
					// 圆形距离
					float dist = length( cellUV );
					float dotMask = 1.0 - smoothstep( radius - 0.5 / uDotSharpness, radius + 0.5 / uDotSharpness, dist );

					// 网点用暗部阴影色，非网点用原始色彩
					vec3 halftoneColor = mix( color, uShadowColor, dotMask * 0.8 );

					// ========== 粗轮廓线（加宽 Sobel） ==========
					float maxEdge = 0.0;
					for ( int y = -1; y <= 1; y++ ) {
						for ( int x = -1; x <= 1; x++ ) {
							vec2 off = vec2( float( x ), float( y ) ) * ts * uEdgeWidth;
							maxEdge = max( maxEdge, dot( texture2D( map, vMapUv + off ).rgb, vec3( 0.299, 0.587, 0.114 ) ) );
						}
					}
					${B()}
					// 综合边缘：Sobel + 局部对比度
					float localContrast = maxEdge - min( maxEdge, halftoneLum );
					float edge = max( sobelEdge, localContrast * 2.0 );
					float edgeMask = smoothstep( uEdgeThreshold * 0.5, uEdgeThreshold, edge );
					vec3 finalColor = mix( halftoneColor, uEdgeColor, edgeMask * 0.85 );

					diffuseColor.rgb = finalColor;
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","dotDensity","dotSharpness","edgeThreshold","edgeWidth","saturation","contrast"]),this}}class Le extends S{get brushDensity(){return this._uniforms.uBrushDensity.value}set brushDensity(e){this._uniforms.uBrushDensity.value=e}get brushWidth(){return this._uniforms.uBrushWidth.value}set brushWidth(e){this._uniforms.uBrushWidth.value=e}get impastoStrength(){return this._uniforms.uImpastoStrength.value}set impastoStrength(e){this._uniforms.uImpastoStrength.value=e}get smoothness(){return this._uniforms.uSmoothness.value}set smoothness(e){this._uniforms.uSmoothness.value=e}get colorSteps(){return this._uniforms.uColorSteps.value}set colorSteps(e){this._uniforms.uColorSteps.value=e}get saturation(){return this._uniforms.uSaturation.value}set saturation(e){this._uniforms.uSaturation.value=e}get edgeThreshold(){return this._uniforms.uEdgeThreshold.value}set edgeThreshold(e){this._uniforms.uEdgeThreshold.value=e}get canvasGrain(){return this._uniforms.uCanvasGrain.value}set canvasGrain(e){this._uniforms.uCanvasGrain.value=e}constructor(e){const{brushDensity:a=.7,brushWidth:n=1.2,impastoStrength:r=.8,smoothness:i=.3,colorSteps:o=6,saturation:s=1.3,edgeThreshold:l=.2,canvasGrain:g=.06,...u}=e??{};super({transparent:!0,...u}),this._uniforms={uBrushDensity:{value:a},uBrushWidth:{value:n},uImpastoStrength:{value:r},uSmoothness:{value:i},uColorSteps:{value:o},uSaturation:{value:s},uEdgeThreshold:{value:l},uCanvasGrain:{value:g}},this.onBeforeCompile=t=>{t.uniforms.uBrushDensity=this._uniforms.uBrushDensity,t.uniforms.uBrushWidth=this._uniforms.uBrushWidth,t.uniforms.uImpastoStrength=this._uniforms.uImpastoStrength,t.uniforms.uSmoothness=this._uniforms.uSmoothness,t.uniforms.uColorSteps=this._uniforms.uColorSteps,t.uniforms.uSaturation=this._uniforms.uSaturation,t.uniforms.uEdgeThreshold=this._uniforms.uEdgeThreshold,t.uniforms.uCanvasGrain=this._uniforms.uCanvasGrain,t.fragmentShader=t.fragmentShader.replace("uniform float opacity;",`
					uniform float opacity;
					uniform float uBrushDensity;
					uniform float uBrushWidth;
					uniform float uImpastoStrength;
					uniform float uSmoothness;
					uniform float uColorSteps;
					uniform float uSaturation;
					uniform float uEdgeThreshold;
					uniform float uCanvasGrain;


				`),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`
					vec4 texel = texture2D(map, vMapUv);
					vec3 color = texel.rgb;

					// ========== Step 1: 梯度计算（Sobel） ==========
					vec2 ts = max(vec2(abs(dFdx(vMapUv.x)), abs(dFdy(vMapUv.y))), 1.0e-6);
					${L()}
					float gradLen = length(sobelGrad);
					// 梯度方向（atan2）
					float gradAngle = atan(sobelGrad.y, sobelGrad.x);
					// 笔触方向：垂直于梯度（沿等亮度线）
					float brushAngle = gradAngle + 1.5708;

					// 边缘强度系数：0.3 基线 + 0.7 由梯度驱动
					// 确保平滑区域也有可见笔触
					float edgeFactor = 0.3 + 0.7 * smoothstep(0.0, 0.6, gradLen);

					// ========== Step 2: 各向异性平滑 ==========
					// 平滑强度：基线 30% + 梯度增强
					float smoothMix = uSmoothness * (0.3 + 0.7 * smoothstep(0.0, 0.5, gradLen));
					{
						float ca = cos(brushAngle);
						float sa = sin(brushAngle);
						vec3 sum = color;
						float totalW = 1.0;
						for (int i = 1; i <= 3; i++) {
							float w = 1.0 / float(i * i + 1);
							vec2 off = vec2(ca, sa) * ts * float(i) * uBrushWidth * 2.0;
							sum += texture2D(map, vMapUv + off).rgb * w;
							sum += texture2D(map, vMapUv - off).rgb * w;
							totalW += w * 2.0;
						}
						color = mix(color, sum / totalW, smoothMix);
					}

					// ========== Step 3: 色彩简化 ==========
					if (uColorSteps > 1.5) {
						float steps = max(uColorSteps, 2.0);
						color = floor(color * steps + 0.5) / steps;
					}

					// ========== Step 4: 饱和度增强 ==========
					float lum = dot(color, vec3(0.299, 0.587, 0.114));
					color = mix(vec3(lum), color, uSaturation);

					// ========== Step 5: 方向性笔触纹理 ==========
					// 笔触密度 = 基线 × uBrushDensity × edgeFactor
					float brushDensity = uBrushDensity * edgeFactor;
					// 第一层笔触（主笔触）
					float ca = cos(brushAngle);
					float sa = sin(brushAngle);
					float brushCoord = vMapUv.x * ca + vMapUv.y * sa;
					float brush1 = fract(brushCoord * 50.0 / uBrushWidth);
					brush1 = smoothstep(0.35, 0.5, brush1) * smoothstep(0.65, 0.5, brush1);
					// 第二层笔触（交错，角度偏移）
					float ca2 = cos(brushAngle + 0.4);
					float sa2 = sin(brushAngle + 0.4);
					float brushCoord2 = vMapUv.x * ca2 + vMapUv.y * sa2;
					float brush2 = fract(brushCoord2 * 35.0 / uBrushWidth);
					brush2 = smoothstep(0.3, 0.5, brush2) * smoothstep(0.7, 0.5, brush2);
					// 合并两层笔触
					float brushPattern = max(brush1 * brushDensity, brush2 * brushDensity * 0.6);

					// ========== Step 6: Impasto 厚涂凹凸光影 ==========
					float bDx = dFdx(brushPattern);
					float bDy = dFdy(brushPattern);
					vec3 bumpNormal = normalize(vec3(
						-bDx * 20.0 * uImpastoStrength,
						-bDy * 20.0 * uImpastoStrength,
						1.0
					));
					vec3 lightDir = normalize(vec3(0.4, 0.7, 0.6));
					float bumpLight = dot(bumpNormal, lightDir) * 0.5 + 0.5;
					// 厚涂：基线 + 笔触凸起 + 暗部堆积
					float impasto = 0.75 + bumpLight * 0.35 * uImpastoStrength;
					float darkThick = smoothstep(0.6, 0.1, lum) * 0.15 * uImpastoStrength;
					impasto += darkThick * bumpLight;
					color *= impasto;

					// ========== Step 7: 边缘加深 ==========
					float edgeSoft = smoothstep(uEdgeThreshold * 0.3, uEdgeThreshold, gradLen);
					color *= 1.0 - edgeSoft * 0.3;

					// ========== Step 8: 画布编织纹理 ==========
					vec2 canvasUv = vMapUv * 120.0;
					float weaveX = step(0.65, fract(canvasUv.x)) * 0.06;
					float weaveY = step(0.65, fract(canvasUv.y)) * 0.06;
					float weave = (weaveX + weaveY) * uCanvasGrain;
					color += vec3(weave * 1.1, weave * 1.05, weave * 0.9);

					// ========== Step 9: 暖色调偏移（油画特征） ==========
					color.r *= 1.03;
					color.b *= 0.97;

					diffuseColor.rgb = clamp(color, 0.0, 1.0);
					diffuseColor.a = opacity * texel.a;
				`)}}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","brushDensity","brushWidth","impastoStrength","smoothness","colorSteps","saturation","edgeThreshold","canvasGrain"]),this}}class We extends v{get time(){return this._uniforms.uTime.value}set time(e){this._uniforms.uTime.value=e}get flowScale(){return this._uniforms.uFlowScale.value}set flowScale(e){this._uniforms.uFlowScale.value=e}get flowSpeed(){return this._uniforms.uFlowSpeed.value}set flowSpeed(e){this._uniforms.uFlowSpeed.value=e}get flowColor(){return this._uniforms.uFlowColor.value}set flowColor(e){this._uniforms.uFlowColor.value.set(e)}get flowOpacity(){return this._uniforms.uFlowOpacity.value}set flowOpacity(e){this._uniforms.uFlowOpacity.value=e}get direction(){return this._uniforms.uDirection.value}set direction(e){this._uniforms.uDirection.value.copy(e)}constructor(e){const{flowScale:a=10,flowSpeed:n=1,flowColor:r=43775,flowOpacity:i=.8,direction:o=new qe(0,0),...s}=e??{};super({transparent:!0,...s}),this._uniforms={uTime:{value:0},uFlowScale:{value:a},uFlowSpeed:{value:n},uFlowColor:{value:new c(r)},uFlowOpacity:{value:i},uDirection:{value:o.clone()}},this.onBeforeCompile=l=>{l.uniforms.uTime=this._uniforms.uTime,l.uniforms.uFlowScale=this._uniforms.uFlowScale,l.uniforms.uFlowSpeed=this._uniforms.uFlowSpeed,l.uniforms.uFlowColor=this._uniforms.uFlowColor,l.uniforms.uFlowOpacity=this._uniforms.uFlowOpacity,l.uniforms.uDirection=this._uniforms.uDirection,l.fragmentShader=l.fragmentShader.replace("uniform float opacity;",`
                    uniform float opacity;
                    uniform float uTime;
                    uniform float uFlowScale;
                    uniform float uFlowSpeed;
                    uniform vec3 uFlowColor;
                    uniform float uFlowOpacity;
                    uniform vec2 uDirection;
                `),l.fragmentShader=l.fragmentShader.replace("#include <dithering_fragment>",`
                    // 计算该点的流向（从高到低）
                    vec2 flowDir;
                    if (length(uDirection) > 0.01) {
                        flowDir = normalize(uDirection);
                    } else {
                        vec3 n = normalize( normal * mat3( viewMatrix ) );
                        vec2 grad = vec2(n.x, n.z);
                        float gLen = length(grad);
                        flowDir = gLen > 0.001 ? grad / gLen : vec2(1.0, 0.0);
                    }

                    // 基于UV的网格
                    vec2 uv = vMapUv * uFlowScale;
                    vec2 frac = fract(uv);

                    // 计算流向角度
                    float angle = atan(flowDir.y, flowDir.x);
                    float ca = cos(angle);
                    float sa = sin(angle);

                    // 将网格坐标旋转到流向方向
                    vec2 center = frac - 0.5;
                    vec2 rot = vec2(center.x * ca - center.y * sa, center.x * sa + center.y * ca);

                    // 沿箭头自身x轴方向流动（rot.x是箭头指向的方向）
                    float flowOffset = -uTime * uFlowSpeed * 0.1;
                    rot.x = fract(rot.x + flowOffset) - 0.5;

                    // 细长箭头形状
                    float arrow = 0.0;

                    // 箭头头部：尖长三角形
                    float headLen = 0.4;
                    float headStart = 0.05;
                    if (rot.x > headStart && rot.x < headStart + headLen) {
                        float t = (rot.x - headStart) / headLen;
                        float halfWidth = 0.15 * (1.0 - t);
                        if (abs(rot.y) < halfWidth) {
                            arrow = 1.0;
                        }
                    }

                    // 箭头尾部：细长矩形
                    float tailLen = 0.45;
                    float tailWidth = 0.04;
                    if (rot.x > -tailLen && rot.x <= headStart) {
                        if (abs(rot.y) < tailWidth) {
                            arrow = 1.0;
                        }
                    }

                    // 渐隐边缘
                    float edgeFade = smoothstep(-tailLen - 0.05, -tailLen + 0.05, rot.x);
                    arrow *= edgeFade;

                    // 在 PBR 光照结果上叠加流动箭头
                    gl_FragColor.rgb += uFlowColor * arrow * uFlowOpacity;
                `)}}onBeforeRender(e,a,n,r,i,o){this._uniforms.uTime.value=performance.now()*.001}copy(e){return super.copy(e),this._uniforms=e._uniforms,h(this,e,["visible","opacity","transparent","wireframe","flowScale","flowSpeed","flowColor","flowOpacity"]),this}}const ot={class:"tab-content"},rt={class:"panel-header"},it={class:"mat-list"},at={key:0,class:"param-bar"},nt=je({__name:"EffectsPanel",props:{map:{}},setup(f){const e=f,a=[{id:"basic",name:"基础",items:[{id:"standard",name:"标准",create:()=>new P},{id:"normal",name:"法向量",create:()=>new Oe},{id:"depth",name:"深度可视化",create:()=>new tt}]},{id:"terrain",name:"地形分析",items:[{id:"elevation",name:"高程着色",create:()=>new ue(0,3e3)},{id:"contour",name:"等高线分析",create:()=>new le({contourColor:"yellow",contourInterval:100,contourWidth:1})},{id:"slope",name:"坡度分析",create:()=>new Te},{id:"aspect",name:"坡向分析",create:()=>new Be},{id:"curvature",name:"山脊山谷分析",create:()=>new oe},{id:"hillshade",name:"山体阴影",create:()=>new O},{id:"bathymetry",name:"水下地形",create:()=>new ae},{id:"flow",name:"流向分析",create:()=>new We},{id:"gold",name:"日照金山",create:()=>new Fe}]},{id:"color",name:"色彩调整",items:[{id:"mono",name:"Mono反色",create:()=>new ne},{id:"bchs",name:"BCHS调色",create:()=>new A},{id:"colorbalance",name:"色彩平衡",create:()=>new j},{id:"levels",name:"色阶",create:()=>new Qe},{id:"splittone",name:"分离色调",create:()=>new Y},{id:"gradmap",name:"渐变映射",create:()=>new ye},{id:"seldesat",name:"选择性去色",create:()=>new Ce},{id:"posterize",name:"海报化",create:()=>new $}]},{id:"enhance",name:"图像增强",items:[{id:"dehaze",name:"去雾",create:()=>new q},{id:"denoise",name:"去噪",create:()=>new X},{id:"sharpen",name:"锐化",create:()=>new N},{id:"histeq",name:"直方图均衡化",create:()=>new xe}]},{id:"art",name:"艺术风格",items:[{id:"ink",name:"水墨画",create:()=>new se},{id:"sketch",name:"素描",create:()=>new fe},{id:"oilpaint",name:"油画",create:()=>new me},{id:"watercolor",name:"水彩画",create:()=>new he},{id:"relief",name:"浮雕",create:()=>new ce},{id:"ghibli",name:"吉卜力风格",create:()=>new ge},{id:"neon",name:"霓虹发光",create:()=>new J},{id:"cyberpunk",name:"赛博朋克",create:()=>new Ee},{id:"oldmap",name:"古旧地图",create:()=>new Q},{id:"blueprint",name:"蓝图纸质",create:()=>new ee},{id:"noir",name:"黑白电影",create:()=>new te},{id:"toon",name:"卡通渲染",create:()=>new be},{id:"pixelart",name:"像素艺术",create:()=>new Ge},{id:"comic",name:"漫画波普",create:()=>new He},{id:"impasto",name:"厚涂油画",create:()=>new Le}]},{id:"remote",name:"遥感指数",items:[{id:"ndvi",name:"植被指数(NDVI)",create:()=>new ve},{id:"ndwi",name:"水体指数(NDWI)",create:()=>new de},{id:"ndbi",name:"建筑指数(NDBI)",create:()=>new pe}]},{id:"fx",name:"特效",items:[{id:"thermal",name:"热成像",create:()=>new K},{id:"mosaic",name:"马赛克",create:()=>new Z},{id:"night",name:"夜景",create:()=>new ie},{id:"bloom",name:"泛光",create:()=>new _e},{id:"kuwahara",name:"Kuwahara滤波",create:()=>new Se},{id:"edge",name:"边缘检测",create:()=>new V},{id:"roughness",name:"纹理粗糙度",create:()=>new re},{id:"channelmix",name:"通道混合器",create:()=>new et}]},{id:"atmosphere",name:"大气氛围",items:[{id:"fog",name:"距离雾效",create:()=>new Me},{id:"aerial",name:"大气透视",create:()=>new De},{id:"underwater",name:"水下效果",create:()=>new Ue},{id:"heathaze",name:"热扰动",create:()=>new we}]}],n=R([a[0].id]),r=R(""),i=Ze(null),o=Ke([]);function s(){if(o.length=0,!i.value)return;const u=i.value;function t(_,b,w,E,W){o.push({key:_,label:b,type:"slider",value:u[_],min:w,max:E,step:W,get:()=>u[_],set:z=>{u[_]=z,u.needsUpdate=!0}})}function m(_,b){o.push({key:_,label:b,type:"color",value:u[_]instanceof c?"#"+u[_].getHexString():u[_],get:()=>u[_],set:w=>{u[_]=new c(w),u.needsUpdate=!0}})}function F(_,b,w){o.push({key:_,label:b,type:"select",value:String(u[_]),options:w,get:()=>u[_],set:E=>{u[_]=E,u.needsUpdate=!0}})}function p(_,b){o.push({key:_,label:b,type:"switch",value:u[_],get:()=>u[_],set:w=>{u[_]=w,u.needsUpdate=!0}})}u instanceof P?(m("color","基础颜色"),t("roughness","粗糙度",0,1,.01),t("metalness","金属度",0,1,.01),m("emissive","自发光颜色"),t("emissiveIntensity","自发光强度",0,3,.01)):u instanceof ue?(t("minHeight","最小高度",-100,1e4,10),t("maxHeight","最大高度",0,1e4,10),t("textureBlend","纹理混合",0,1,.01)):u instanceof le?(t("contourInterval","等高线间距",10,500,10),t("contourWidth","等高线宽度",.5,5,.5),m("contourColor","等高线颜色")):u instanceof O?(t("sunElevation","太阳高度角",0,1.57,.01),t("sunAzimuth","太阳方位角",0,6.28,.01),t("shadeStrength","阴影强度",0,1,.01),t("textureBlend","纹理混合",0,1,.01)):u instanceof Te?(t("maxSlope","最大坡度(度)",10,90,5),t("blend","混合度",0,1,.01)):u instanceof Be?(t("slopeThreshold","坡度阈值(度)",0,30,1),t("blend","混合度",0,1,.01)):u instanceof oe?t("intensity","曲率强度",0,10,.01):u instanceof ae?(m("shallow","浅水色"),m("deep","深水色"),t("depthMax","最大深度",100,1e4,100),t("strength","扰动强度",0,.05,.001),t("frequency","噪声频率",1,20,1),t("speed","动画速度",0,5,.1)):u instanceof A?(t("brightness","亮度",0,2,.01),t("contrast","对比度",0,2,.01),t("gamma","伽马",.1,3,.01),t("saturation","饱和度",0,2,.01),t("hue","色相",-3.14,3.14,.01)):u instanceof ne?m("color","基础颜色"):u instanceof j?(m("shadows","阴影色"),m("midtones","中间调色"),m("highlights","高亮色")):u instanceof Y?(m("shadows","阴影染色"),m("highlights","高光染色"),t("balance","平衡偏移",-1,1,.01)):u instanceof ye?(m("shadow","阴影色"),m("shadowMid","暗部色"),m("mid","中间色"),m("midHighlight","亮部色"),m("highlight","高光色")):u instanceof Ce?(t("hueCenter","保留色相",0,360,1),t("hueRange","色相范围",0,180,1),t("saturation","饱和度",0,2,.01)):u instanceof $?t("levels","色阶数",2,32,1):u instanceof N?(t("amount","锐化强度",0,2,.01),t("radius","模糊半径",1,3,.5)):u instanceof q?(t("strength","去雾强度",0,1,.01),t("threshold","阈值",0,1,.01)):u instanceof X?(t("sigmaSpatial","空间权重",.5,3,.1),t("sigmaRange","范围权重",.02,.6,.01)):u instanceof xe?(t("strength","均衡化强度",0,1,.01),t("radius","采样半径",1,8,.5)):u instanceof se?(t("inkDensity","墨色浓度",0,1,.01),t("colorStrength","色彩强度",0,1,.01),t("edgeThreshold","轮廓阈值",0,1,.01),t("paperGrain","纸张纹理",0,.5,.01),t("contrast","光照对比",0,1,.01)):u instanceof fe?(t("hatchDensity","排线密度",0,1,.01),t("edgeThreshold","轮廓阈值",0,1,.01),t("paperGrain","纸张纹理",0,.5,.01)):u instanceof me?(t("brushStrength","笔触强度",0,1,.01),t("colorBoost","色彩增强",0,1,.01),t("canvasGrain","画布纹理",0,.5,.01),t("edgeThreshold","边缘阈值",0,1,.01),t("swirlStrength","旋涡强度(梵高)",0,1,.01)):u instanceof he?(t("diffusion","色彩扩散",0,1,.01),t("colorLevels","色阶数量",2,16,1),t("granulation","颗粒沉淀",0,1,.01),t("paperWet","纸张湿润",0,1,.01)):u instanceof ce?(t("reliefDepth","浮雕深度",0,1,.01),t("smoothness","平滑系数",0,1,.01),t("brightness","亮度",0,2,.01),t("stoneTexture","石刻纹理",0,1,.01),t("lightAngle","光照角度",0,6.28,.1)):u instanceof ge?(t("warmth","暖色调",0,1,.01),t("saturation","饱和度",0,1,.01),t("softness","水彩晕染",0,1,.01),t("edgeThreshold","轮廓线",0,1,.01)):u instanceof J?(m("glowColor","发光色"),t("intensity","发光强度",0,1,.01),t("threshold","边缘阈值",0,1,.01)):u instanceof Q?(t("sepiaStrength","棕褐强度",0,1,.01),t("paperGrain","纸张纹理",0,.5,.01)):u instanceof ee?(m("lineColor","线条色"),m("bgColor","背景色"),p("showGrid","显示网格"),t("threshold","边缘阈值",0,1,.01)):u instanceof te?(t("contrast","光照对比",0,1,.01),t("grain","胶片颗粒",0,.3,.01)):u instanceof be?(t("levels","色阶数",2,8,1),t("edgeThreshold","边缘阈值",0,1,.01),m("edgeColor","轮廓色")):u instanceof Ge?(t("pixelDensity","像素密度",8,256,8),t("colorLevels","颜色层级",2,32,1),t("dither","抖动强度",0,1,.01)):u instanceof He?(t("dotDensity","网点密度",10,100,5),t("dotSharpness","网点锐利度",1,12,1),t("edgeThreshold","轮廓阈值",0,1,.01),t("edgeWidth","轮廓宽度",.5,4,.5),m("edgeColor","轮廓色"),m("shadowColor","阴影色"),t("saturation","饱和度",.5,2,.01),t("contrast","对比度",1,3,.05)):u instanceof Le?(t("brushDensity","笔触密度",0,1,.01),t("brushWidth","笔触宽度",.5,3,.1),t("impastoStrength","厚涂强度",0,2,.01),t("smoothness","各向异性平滑",0,1,.01),t("colorSteps","色阶数量",2,16,1),t("saturation","饱和度",0,2,.01),t("edgeThreshold","边缘阈值",0,1,.01),t("canvasGrain","画布纹理",0,.3,.01)):u instanceof _e?(t("threshold","亮度阈值",0,1,.01),t("intensity","泛光强度",0,2,.01),t("blurRadius","模糊半径",1,4,.1)):u instanceof ie?(t("threshold","发光阈值",0,1,.01),t("glowIntensity","辉光强度",0,2,.01),m("glowColor","辉光色")):u instanceof Se?(t("radius","滤波半径",1,8,1),t("blend","混合度",0,1,.01)):u instanceof V?(t("threshold","阈值",0,1,.01),m("edgeColor","轮廓色"),t("blend","叠加强度",0,1,.01)):u instanceof re?(t("windowSize","窗口大小",1,5,1),t("intensity","可视化强度",0,2,.01),t("blend","混合度",0,1,.01)):u instanceof Ee?(m("edgeColor1","边缘色1"),m("edgeColor2","边缘色2"),t("edgeThreshold","边缘阈值",0,1,.01),t("edgeIntensity","边缘强度",0,1,.01),t("scanlineFreq","扫描线频率",50,800,10),t("scanlineIntensity","扫描线强度",0,.5,.01),t("tintStrength","色调强度",0,1,.01),t("grain","胶片颗粒",0,.3,.01)):u instanceof K?F("mode","模式",["0=热成像","1=夜视","2=铁红"]):u instanceof Z?(t("cellSize","网格尺寸",1,64,1),p("showGrid","显示网格"),m("gridColor","网格色")):u instanceof we?(t("strength","扰动强度",0,.1,.001),t("frequency","噪声频率",1,20,1),t("speed","动画速度",0,5,.1)):u instanceof Me?(m("fogColor","雾颜色"),t("near","近距离",10,1e3,10),t("far","远距离",500,2e4,100),t("density","浓度指数",.1,3,.1)):u instanceof De?(m("atmosphereColor","大气颜色"),p("autoDistance","自动距离"),t("nearFactor","近距离系数",.01,.5,.01),t("farFactor","远距离系数",.5,10,.1),t("strength","透视强度",0,1,.01),t("brightnessFade","亮度衰减",0,1,.01)):u instanceof Ue?(t("tintStrength","色调强度",0,1,.01),t("warpStrength","折射强度",0,.02,.001),t("causticIntensity","焦散强度",0,.5,.01),t("causticScale","焦散缩放",2,30,1)):u instanceof ve||u instanceof de||u instanceof pe?t("blend","混合度",0,1,.01):u instanceof We?(t("flowScale","图案缩放",1,50,1),t("flowSpeed","流动速度",0,5,.1),m("flowColor","流向颜色"),t("flowOpacity","流向透明度",0,1,.01)):u instanceof Fe&&(t("minHeight","最小高度",-1e3,1e4,100),t("maxHeight","最大高度",0,1e4,100),t("snowLineHeight","雪线高度",0,8e3,100),t("sunElevation","太阳高度角",0,1.57,.01),t("sunAzimuth","太阳方位角",0,6.28,.01),t("textureBlend","纹理混合",0,1,.01),t("goldIntensity","金色强度",0,1,.01),m("goldColor","金色"),m("snowColor","雪地色"))}function l(u){const t=u.create();e.map.material=t,e.map.reload(!0),i.value=t,r.value=u.id,s()}function g(u,t){u.set(t),u.value=t}return(u,t)=>{const m=y("el-icon"),F=y("el-button"),p=y("el-collapse-item"),_=y("el-collapse"),b=y("el-scrollbar"),w=y("el-divider"),E=y("el-slider"),W=y("el-color-picker"),z=y("el-option"),ze=y("el-select"),Ie=y("el-input-number"),Pe=y("el-switch"),ke=y("el-form-item"),Re=y("el-form");return C(),T("div",ot,[I("div",rt,[U(m,{color:"var(--el-color-primary)"},{default:M(()=>[U(Ve($e))]),_:1}),t[1]||(t[1]=I("span",null,"地图特效",-1))]),U(b,{class:"effect-list"},{default:M(()=>[U(_,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=d=>n.value=d)},{default:M(()=>[(C(),T(G,null,H(a,d=>U(p,{key:d.id,title:d.name,name:d.id},{default:M(()=>[I("div",it,[(C(!0),T(G,null,H(d.items,x=>(C(),D(F,{key:x.id,class:"mat-btn",type:r.value===x.id?"primary":"default",onClick:ut=>l(x)},{default:M(()=>[Ye(Xe(x.name),1)]),_:2},1032,["type","onClick"]))),128))])]),_:2},1032,["title","name"])),64))]),_:1},8,["modelValue"])]),_:1}),o.length>0?(C(),T("div",at,[U(w,{style:{margin:"0 0 8px"}}),U(Re,{size:"small","label-position":"left","label-width":"90px"},{default:M(()=>[(C(!0),T(G,null,H(o,d=>(C(),D(ke,{key:d.key,label:d.label},{default:M(()=>[d.type==="slider"?(C(),D(E,{key:0,"model-value":d.value,min:d.min??0,max:d.max??1,step:d.step??.01,"onUpdate:modelValue":x=>g(d,x)},null,8,["model-value","min","max","step","onUpdate:modelValue"])):d.type==="color"?(C(),D(W,{key:1,"model-value":d.value,onActiveChange:x=>g(d,x)},null,8,["model-value","onActiveChange"])):d.type==="select"?(C(),D(ze,{key:2,"model-value":d.value,"onUpdate:modelValue":x=>g(d,x)},{default:M(()=>[(C(!0),T(G,null,H(d.options,x=>(C(),D(z,{key:x,label:x,value:x},null,8,["label","value"]))),128))]),_:2},1032,["model-value","onUpdate:modelValue"])):d.type==="number"?(C(),D(Ie,{key:3,size:"small","model-value":d.value,min:d.min??0,max:d.max??100,step:d.step??1,"onUpdate:modelValue":x=>g(d,x)},null,8,["model-value","min","max","step","onUpdate:modelValue"])):d.type==="switch"?(C(),D(Pe,{key:4,"model-value":d.value,"onUpdate:modelValue":x=>g(d,x)},null,8,["model-value","onUpdate:modelValue"])):k("",!0)]),_:2},1032,["label"]))),128))]),_:1})])):k("",!0)])}}}),st=Je(nt,[["__scopeId","data-v-023355d7"]]);export{st as default};
