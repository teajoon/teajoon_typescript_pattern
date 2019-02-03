class Preference {
  public static getInstance (): Preference {
    if (Preference.instance === null) {
      Preference.instance = new Preference()
    }
    return Preference.instance
  }
  private static instance: Preference
  private constructor () {}
}

const p: Preference = Preference.getInstance()
