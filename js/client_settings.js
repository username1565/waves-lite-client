var object_with_settings = {
            CLIENT_VERSION: '0.5.18a',	//client version

		//				NODE ADDRESS	- to see balances by address, and transactions. To raise your own node, see: https://github.com/wavesplatform/Waves/

			//(unsafe, but working)
			//		default node address (HTTP).
			//			Test: http://nodes.wavesnodes.com/blocks/height (must return last block in JSON)
            //NODE_ADDRESS: 'http://nodes.wavesnodes.com',
            
			//(safe and default)
			//		default node address (HTTPS).
			//			Test: https://nodes.wavesnodes.com/blocks/height (must return last block in JSON)
			NODE_ADDRESS: 'https://nodes.wavesnodes.com',


		//				COINOMAT ADDRESS - to deposit-withdraw crypto-currencies, and exchange it to tokens, and from this.

			//			Test: https://coinomat.com/api/v1/get_xrate.php?f=WBTC&t=BTC	(must return JSON)
            COINOMAT_ADDRESS: 'https://coinomat.com',	//default coinomat address.


		//				MATCHER - to process the orders, and make exchange on dex. To raise your own matcher, see: https://github.com/wavesplatform/dex/

			//(inactive)
			//		default matcher - HTTPS
			//			Test: https://matcher.wavesnodes.com/matcher (must return matcher public key)
//            MATCHER_ADDRESS: 'https://matcher.wavesnodes.com',

			//(unsafe, but working)
			//		default matcher from https://waves.exchange/ - HTTP (ACTIVE).
			//			Test: http://matcher.waves.exchange/matcher (must return matcher public key)
//            MATCHER_ADDRESS: 'http://matcher.waves.exchange',

			//(safe and default)
			//		default matcher from https://waves.exchange/ - HTTPS (ACTIVE).
			//			Test: https://matcher.waves.exchange/matcher (must return matcher public key)
            MATCHER_ADDRESS: 'https://matcher.waves.exchange',

			//(unsafe, unstable, but working)
			//		my test matcher, if https-matchers and http - not working.
			//			Test: http://dyndns-node.duckdns.org:6886/matcher (must return matcher public key)			
//            MATCHER_ADDRESS: 'http://dyndns-node.duckdns.org:6886',	//custom matcher - HTTP

			//(unsafe, unstable, but working)
			//		local matcher, raised on the node (HTTP only):
			//			Test: http://127.0.0.1:6886/matcher (must return matcher public key)			
//            MATCHER_ADDRESS: 'http://127.0.0.1:6886',					//custom matcher - HTTP


		//			DATAFEED ADDRESS:	data about market-candles.	To raise your own DATAFEED API - see: https://github.com/PyWaves/WavesDataFeed
		//				Warning! This API is deprecated!
		//				Info to migrate to new API here: https://forum.wavesplatform.com/t/marketdata-deprecation-migration-guide/11050
		//				Maybe, this client must to be edited to be able to working with new API.

			//(save and default)
			//		default datafeed API.
			//			Test: 	https://marketdata.wavesplatform.com/api/trades/WAVES/8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS/50 (must return JSON)
            DATAFEED_ADDRESS: 'https://marketdata.wavesplatform.com'
        }
;