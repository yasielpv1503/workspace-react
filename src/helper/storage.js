

const keys = {
    auth: 'sdfsf877328947c2384sdfs/*23r2ec*dasdasd/*232/e2*as/d32837',
    filter: 'sdfmdfs43sf877328947c2384sdfs/*23r2ec*dasdasd/*232/e2*as/d32837',
    filterClaim: 'sdfmdfs43sf3423482323jkjxzkxcdasdasd/*232/e2*as/d32837',
    filterEvent: 'sdfmdfs43sf3423sd78sdf5dfasdf90*23d2*2323*23*23*23*/d32837',
    filterType: 'sdfmdfs439992kkd9*sd/ew/c*czx/*ccqqw*d/w*w**23*23*23*/d32837',
    filterClientApp: 'sdfmdfs423842uc92c3c2,3m4,234m,c23m,w*w**23*23*23*/d32837',

    statusImporter: 'sdfmdfs42384734v9435*+34534vjddsddfsdf*23*23*23*/d32837',
    statusImporterDMO: 'sdfmdfs423848345783vkerfjeiu3o43843845kereddfsdf*23*23*23*/d32837'

}

const save = (key, payload) => {
    localStorage.setItem(key, JSON.stringify(payload))
}
const load = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const remove = (key) => {
    localStorage.removeItem(key)
}

export default { save, load, remove, keys }