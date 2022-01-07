it("Sample/Sample_Button_Click", async function() {
	var _data = testcaseData_1638258202510.dataset;
	await kony.automation.playback.waitFor(["Sample/Home","Button0ha6573092c2643"]);
	await kony.automation.playback.wait(1000);
	await kony.automation.scrollToWidget(["Sample/Home","Button0ha6573092c2643"]);
	await kony.automation.playback.waitFor(["Sample/Home","Button0ha6573092c2643"]);
	kony.automation.button.click(["Sample/Home","Button0ha6573092c2643"]);
	expect(kony.automation.widget.getWidgetProperty(["Sample/Home","Button0ha6573092c2643"], "text")).toEqual(_data.assert.Button0ha6573092c2643);
});