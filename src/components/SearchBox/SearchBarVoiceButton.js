import React, { Component } from 'react'
import Mic from 'react-icons/lib/md/mic'
import Pause from 'react-icons/lib/md/pause'

class SearchBarButton extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)

    let canUseFeature = false
    if (!window.hasOwnProperty('webkitSpeechRecognition')) {
      console.log('Unable to use the Speech Recognition API')
    } else {
      this.recognition = new window.webkitSpeechRecognition()
      canUseFeature = true
      const speechRecognitionList = new window.webkitSpeechGrammarList()
      const grammar = '#JSGF V1.0; grammar names; public <name> = david ;'
      speechRecognitionList.addFromString(grammar, 1)
      this.recognition.grammars = speechRecognitionList
      // console.log(this.recognition.grammars)
    }

    this.state = {
      canUseFeature,
      submittedQuery: false,
      messages: [],
      recording: false
    }
  }

  doRecord() {
    console.log("It's recording, say something")
    if ('webkitSpeechRecognition' in window && !this.state.recording) {
      console.log('Speech recognition ready')
      this.recognition.continuous = true
      this.recognition.interimResults = true
      this.recognition.lang = 'en-AU'
      this.recognition.start()
      let finalTranscripts = ''

      const instance = this
      let newList = []
      instance.state.messages.slice()
      instance.setState({
        messages: newList
      })

      this.recognition.onresult = function(event) {
        let interimTranscripts = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          let transcript = event.results[i][0].transcript
          transcript.replace('\n', '<br>')
          if (event.results[i].isFinal) {
            finalTranscripts += transcript
          } else {
            interimTranscripts += transcript
          }
        }
        console.log(finalTranscripts + ' ' + interimTranscripts)

        instance.setState({
          messages: [finalTranscripts + ' ' + interimTranscripts]
        })
      }
    }
  }

  doStopRecord() {
    this.recognition.stop()
    console.log('Stopped recording, query is: ')
    console.log(this.state.messages)
    // Updates the query in the search box.
    if (this.state.messages[0] !== undefined) {
      this.props.updateQueryCallback(this.state.messages[0])
    }
    this.setState({ submittedQuery: true })

    // Do call to backend here.
    this.setState({ submittedQuery: false })
  }

  onClick() {
    if (this.state.recording) {
      this.doStopRecord()
      this.setState({ recording: false })
    } else {
      console.log(this.props.searchText)
      // Do voice stuff here.
      this.doRecord()
      this.setState({ recording: true })
    }
  }

  getIcon() {
    if (this.state.recording) {
      return <Pause size={30} style={'center'} color="white" />
    } else {
      return <Mic size={30} style={'center'} color="white" />
    }
  }
  render() {
    const { canUseFeature } = this.state
    return (
      canUseFeature && (
        <a className="button glh-button glh-button-voice" onClick={this.onClick}>
          {this.getIcon()}
        </a>
      )
    )
  }
}

export default SearchBarButton
