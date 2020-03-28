
import css from "./taskCreator.css";

const ThoughtsWriter = () => 
(
    <div className={`${css.formRight} ${css.form}`}>
    <h1>Write your thought</h1>
    <form>
        <div className="inner-wrap">
            <label><textarea name="field2" rows='8'></textarea></label>
        </div>
    
        
        <div className="button-section">
         <button className={css.button}>Write</button>
        
        
        </div>
    </form>
    </div>)

export default ThoughtsWriter;