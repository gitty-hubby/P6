/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
                expect(feed.url).not.toBeNull();
            });
        });
        

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
        it('have names defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
                expect(feed.name).not.toBeNull();
            });
        });
        
    });


    /* Test suite for the menu widget */
    describe('The menu', function () {
         
        /* Test that ensures the menu element is
        * hidden by default. Checking if it has .menu-hidden
        * class.
        */

        var body = $('body');
        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
         

        /* Test that ensures the menu changes
        * visibility when the menu icon is clicked. 
        * Checking for .menu-hidden class after triggering 
        * click.
        */
         
        var btnIcon = $('.menu-icon-link');
        it('changes visibility when the menu icon is clicked', function () {
            btnIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            btnIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });
    
    
    /* Test suite for "Initial Entries" */
    describe('Initial Entries', function () {
    
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
       
        
        beforeEach(function (done) {
            // clearing all entries in .feed
            $('.feed').empty();    
            loadFeed(0, done);
        });
        
        
        it('have at least a single entry with .feed container', function(done) {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });
        
    });
    
    /* Test suite for "New Feed Selection" */
    describe('New Feed Selection', function () {
        
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * 
         */
        var oldFeed, newFeed;
        beforeEach(function (done) {
            oldFeed = $('.header-title').text();
            loadFeed(1, done); //loading next [1] feed...
        });
        
        it('loaded new feed', function (done) {
            newFeed = $('.header-title').text();
            // comparing previously defined title with the new one
            expect(newFeed).not.toBe(oldFeed);
            done();
        });
    
    });
    
}());
