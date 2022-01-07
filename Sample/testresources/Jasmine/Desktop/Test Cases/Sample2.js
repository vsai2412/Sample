it("Sample/Sample2", async function() {
	var _data = testcaseData_1638434173945.dataset;
	await kony.automation.playback.waitFor(["Sample/Home","Button0ha6573092c2643"]);
	kony.automation.button.click(["Sample/Home","Button0ha6573092c2643"]);
	await kony.automation.playback.waitFor(["Sample/Home","Segment0i7a852b234c642"]);
	await kony.automation.scrollToWidget(["Sample/Home","Segment0i7a852b234c642"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,5]"]);
	kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,11]"]);
	expect(kony.automation.widget.getWidgetProperty(["Sample/Home","Segment0i7a852b234c642[0,11]"], "text")).toEqual(_data.assert.Segment0i7a852b234c642[0,11]);
	await kony.automation.playback.wait(2000);
});