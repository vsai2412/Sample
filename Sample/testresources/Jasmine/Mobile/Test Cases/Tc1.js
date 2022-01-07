it("Sample/Tc1", async function() {
	var _data = testcaseData_1638890535838.dataset;
	await kony.automation.playback.waitFor(["Sample/Home","Button0ha6573092c2643"]);
	kony.automation.button.click(["Sample/Home","Button0ha6573092c2643"]);
	await kony.automation.playback.waitFor(["Sample/Form1","Button0f9709a6a01fb47"]);
	kony.automation.button.click(["Sample/Form1","Button0f9709a6a01fb47"]);
	expect(kony.automation.widget.getWidgetProperty(["Sample/Form1","Label1"], "text")).toEqual(_data.assert.Button0f9709a6a01fb47);
	kony.automation.alert.click(0);
});