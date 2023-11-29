import { sTok, kTok, kToks3, targetFiles } from "./path"

const NewAudio = (props) => {
    const data = props.id === "sTok" ? sTok : props.id === "kTok" ? kTok : kToks3
    const targetFileSrc = props.id === "sTok" ? targetFiles[0] : targetFiles[1];

    return (
        <div className="mb-5">
            <h4>{props.heading}</h4>
            <div className="row">
                <div className="col"><h5>Source</h5></div>
                <div className="col"><h5>Target</h5></div>
                <div className="col"><h5>Converted Files</h5></div>
            </div>
            {
                data.Source.map((audio, index) => (
                    <div className="row" key={index}>
                        <div className="col"><audio className="audio-player" src={audio} controls /></div>
                        <div className="col">
                            {index === 0 && <audio className="audio-player" src={targetFileSrc} controls />}
                        </div>
                        <div className="col"><audio className="audio-player" src={data.Target[index]} controls /></div>
                    </div>
                ))
            }
        </div>
    )
}

export default NewAudio
