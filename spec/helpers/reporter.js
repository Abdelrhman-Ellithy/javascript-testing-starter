import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
  spec: {
    displayPending: true,
    displayDuration: true,
    displaySuccessful: true,
    displayFailed: true,
    displayErrorMessages: true
  },
  summary: {
    displayDuration: true,
    displaySuccessful: true,
    displayFailed: true,
    displayPending: true
  },
  stacktrace: {
    displayStacktrace: StacktraceOption.PRETTY
  },
  colors: {
    successful: 'green',
    failed: 'red',
    pending: 'yellow'
  }
}));
