          <div class="filter-inputs filter-inputs__input-small">  
            <span>Match Odds</span>
            <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
              <input type="radio" id="option-1" class="mdl-radio__button" name="options" value="1" checked>
              <span class="mdl-radio__label">Home</span>
            </label>
            <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
              <input type="radio" id="option-2" class="mdl-radio__button" name="options" value="2">
              <span class="mdl-radio__label">Draw</span>
            </label>  
            <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-3">
              <input type="radio" id="option-3" class="mdl-radio__button" name="options" value="1">
              <span class="mdl-radio__label">Away</span>
            </label>
            <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-4">
              <input type="radio" id="option-4" class="mdl-radio__button" name="options" value="2">
              <span class="mdl-radio__label">Under</span>
            </label>  
            <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-5">
              <input type="radio" id="option-5" class="mdl-radio__button" name="options" value="2">
              <span class="mdl-radio__label">Over</span>
            </label> 
            <div class="input-container">
              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="option__min">
                <label class="mdl-textfield__label" for="sample2">Min</label>
                <span class="mdl-textfield__error">Input is not a number!</span>
              </div>       
              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="option__max">
                <label class="mdl-textfield__label" for="sample2">Max</label>
                <span class="mdl-textfield__error">Input is not a number!</span>
              </div>
            </div> 
            <span>Minutes played</span> 
            <div id="rangedval">
              <span id="rangeval"><span class="minutes_value_one" style='display: inline-block'>0</span>' - <span class="minutes_value_two" style='display: inline-block'>90</span>'</span>
            </div>
            <div id="rangeslider"></div>
          </div> 
          <div class="filter-inputs">  
            <span>Shots</span>     
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="shots__min">
            <label class="mdl-textfield__label" for="sample2">Min</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
          </div>       
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="shots__max">
            <label class="mdl-textfield__label" for="sample2">Max</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
          </div>
        </div>  
        <div class="filter-inputs"> 
          <span>Goals</span>      
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="goals__min">
            <label class="mdl-textfield__label" for="sample2">Min</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
          </div>       
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="goals__max">
            <label class="mdl-textfield__label" for="sample2">Max</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
          </div>
        </div> 
        <div class="filter-inputs">
          <span>Correct Score</span>     
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="score__home">
            <label class="mdl-textfield__label" for="sample2">Home</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
          </div>       
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="score__away">
            <label class="mdl-textfield__label" for="sample2">Away</label>
            <span class="mdl-textfield__error">Input is not a number!</span>
            </div>
          </div>   
          <div class="filter-inputs">  
            <span>Pressure Indicator</span>     
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="pi__min">
              <label class="mdl-textfield__label" for="sample2">Min</label>
              <span class="mdl-textfield__error">Input is not a number!</span>
            </div>       
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="pi__max">
              <label class="mdl-textfield__label" for="sample2">Max</label>
              <span class="mdl-textfield__error">Input is not a number!</span>
            </div>
          </div> 
    <script src='js/main__script.js'></script>