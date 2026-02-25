import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = { error: null, info: null };
  }
  static getDerivedStateFromError(error){
    return { error };
  }
  componentDidCatch(error, info){
    this.setState({ error, info });
    // also log to console
    console.error('Captured by ErrorBoundary:', error, info);
  }
  render(){
    const { error, info } = this.state;
    if(!error) return this.props.children;
    return (
      <div style={{padding:30,fontFamily:"'Share Tech Mono',monospace",color:'#ffb3c6',background:'#0b0b0b',minHeight:'100vh'}}>
        <h2 style={{color:'#ff6580'}}>Application Error</h2>
        <div style={{marginTop:12,whiteSpace:'pre-wrap',fontSize:13}}>{String(error && (error.stack||error.message||error))}</div>
        {info && info.componentStack && (
          <details style={{marginTop:12,color:'#ccc'}}>
            <summary style={{cursor:'pointer'}}>Component stack</summary>
            <pre style={{whiteSpace:'pre-wrap',fontSize:12,color:'#ddd'}}>{info.componentStack}</pre>
          </details>
        )}
        <div style={{marginTop:20,fontSize:13,color:'#9aa'}}>Open browser DevTools Console for more details.</div>
      </div>
    );
  }
}
