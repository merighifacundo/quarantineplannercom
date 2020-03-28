
import css from "./body.css";

const Body = () =>(<section className={css.banner}>
<div className={css.inner}>
    <header>
        <h1>Quarantine Day Sharing</h1>
    </header>

    <div className={css.flex}>

        <div>
            <span className="icon fa-tasks"></span>
            <h3>Create your day tasks</h3>
            <p>Share your tasks so others will be inspired.</p>
        </div>

        

        <div>
            <span className="icon fa-lightbulb-o"></span>
            <h3>Write your thoughts</h3>
            <p>We are all isolated but not alone. Share your thoughts and feelings.</p>
        </div>

    </div>

    <footer>
        <a href="/creator" className={css.button}>Get Started</a>
    </footer>
</div>

</section>)

export default Body;