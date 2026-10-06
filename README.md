
# Rhymaholic

Rhymaholic is a open source website that provides tools to help rappers and song writers.

## Live Site: [https://rhymaholic.com](https://rhymaholic.com)

![Rhymaholic](website_screenshot.png)

## About

Rhymaholic is a website I started in order to learn more about how rhyming worked and to figure out the underlying structure behind the english language. The first tool (Rhyme Grid) was developed when I was in college and I was rewarded the ENGL 150/ENGL 250 Excellence in Writing and Communication award at Iowa State University. They then published it as an example in the English book.

I have since added more tools that have been useful to me, and I plan to add more in the future.

## Tools

## [Dictionary Search](https://rhymaholic.com/DictionarySearch)

Search the IPA Dictionary the site provides directly if a word is included. Results are capped at 50 to prevent lag and keep good performace.

## [Freestyle Word Generator](https://rhymaholic.com/rhymeTracker)

This tool generates random words for you to rhyme with. The words are generated based off unique pronunciations in the english language. This is done so that there is adequate coverage over the english language. It also filters out any word whos frequency is below a small threshold to remove rare words and keep more common words.

## [English To Phonetics](https://rhymaholic.com/phonetictool)

This converts the english language into IPA (International Phonetic Alphabet) as you type. This is particually useful to identify how to pronounce a word properly or similar words that should rhyme. This tool was developed when I was in a linguistics class at ISU. Another site did something similar however it bothered me that no site could convert text in real time to its phonetic transcription.

## [Rhyme Grid V2](https://rhymaholic.com/rhymingtoolsimplified)

This is a revised version of Rhyme Grid which makes the UI much easier to enter words into. For each word it just requires a space to seperate them.

## [Rhyme Grid](https://rhymaholic.com/rhymingtool)

This is the first tool I designed for Rhymaholic. The filter for each of the columns can be used to filter for perfect rhymes, near perfect rhymes, or slant rhymes. So for example if you wanted perfect rhymes for "car" you would enter "PS" for the filter. If you wanted near rhymes you would use "P". If you wanted slant rhymes you would enter "S".

## Getting Started

Clone the repository then go into the project root and run

```
npm install
```

To start the development server run

```
npm run dev
```

You can then access the site at

```
http://localhost:5173/
```

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a branch for your change.
3. Make your changes.
4. Test the project locally.
5. Open a pull request.

## Data

This project uses data from [CMU-Pronouncing-Dictionary](https://github.com/words/cmu-pronouncing-dictionary)
