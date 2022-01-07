require(["Sample/Test Suites/Sample1"], function() {
	require(["Sample/Test Suites/suite2"], function() {
				jasmine.getEnv().execute();
	});
});