lint {
  data_depend {
    // By default, data dependent changes do not cause migration linting to error
    // on exit (code 1). Setting \`error\` to true enables this behavior.
    error = true
  }
naming {
      error   = true
      match   = "^[a-z]+$"
      message = "must be lowercase"
    }
}
