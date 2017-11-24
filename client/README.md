<h1>Redux kit</h1>
<h2>Get started</h2>
<pre>
<code>
git clone https://github.com/kovaveikko/redux-kit YourApp
cd YourApp && yarn install
yarn start
</code>
</pre>

<h2>Commands</h2>
<p>
Start development server<br>
<code>yarn start</code>
</p>
<p>
Run unit tests<br>
<code>yarn test</code>
</p>
<p>
Create production build<br>
<code>yarn build</code>
</p>
<p>
Generate component or module from template<br>
<pre>
<code>
node ./bin/generate component [component name]
node ./bin/generate module [module name]
</code>
</pre>
</p>

<h2>Architecture</h2>

<p>
<b>Components</b> are reusable, independent, and often stateless React components that receive all external parameters through props, and are not directly <code>connect()</code>ed to the redux store.
</p>

<p>
<b>Modules</b> are connected to the redux store. They can represent a page or a collection of pages from a feature, for example. Each module holds its own state, and rarely needs to use data from other modules' states.
</p>
