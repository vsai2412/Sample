it("Sample/sample4", async function() {
	var _data = testcaseData_1638434664032.dataset;
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["Sample/Home","Button0ha6573092c2643"]);
	kony.automation.button.click(["Sample/Home","Button0ha6573092c2643"]);
	await kony.automation.playback.waitFor(["Sample/Home","Button0ha6573092c2643"]);
	expect(kony.automation.widget.getWidgetProperty(["Sample/Home","Button0ha6573092c2643"], "isVisible")).toBeTruthy(_data.assert.Button0ha6573092c26431638435335332);
	expect(kony.automation.widget.getWidgetProperty(["Sample/Home","Button0ha6573092c2643"], "text")).toEqual(_data.assert.Button0ha6573092c2643);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,2]"]);
	kony.automation.button.click(["Sample/Home","Button0ha6573092c2643"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,9]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,10]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,10]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,10]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,10]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,10]"]);
	await kony.automation.scrollToWidget(["Sample/Home","Segment0i7a852b234c642"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,3]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,3]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,3]"]);
	// :User Injected Code Snippet [// - [1 lines]]
	kony.automation.playback.wait(100);
	// :End User Injected Code Snippet {b6914bff-db66-8994-33fc-5ccb574a951b}
},200000);