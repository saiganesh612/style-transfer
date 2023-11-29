import { kanadaToSolinga, soligaToKanada, targetFiles } from "./path"

const Audio = ({ target }) => {
    const data = target === "kts" ? kanadaToSolinga : soligaToKanada
    const targetFileSrc = target === "kts" ? targetFiles[2] : targetFiles[3];

    return (
        <div className="mb-5">
            <h4>{target === "kts" ? "Kanada to Soliga(Female to Female)" : "Soliga to Kanada(Female to Female)"}</h4>
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

export default Audio
