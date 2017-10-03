module.exports = {
    typescript(component, css){

        const import_css = css === true ? `import './${component}.sass'\n` : ''

        return `${import_css}import { Component, React } from 'ts-modules/react'

export default class ${component} extends Component {
    render() {
        return (
            <div id="${component}">
                <h2>${component} work!</h2>
            </div>
        )
    }
}`
    },

    css(component) {
        return `@import "../../../node_modules/ts-modules/lib"

#${component}
    h2
        color: #444`
    }
}