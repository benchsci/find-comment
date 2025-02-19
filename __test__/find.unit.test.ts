import {findCommentPredicate} from '../lib/find'

describe('find comment tests', () => {
  test('find by bodyIncludes', async () => {
    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: '',
          bodyIncludes: 'Kansas',
          bodyRegex: '',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(true)

    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: '',
          bodyIncludes: 'not-exist',
          bodyRegex: '',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(false)
  })

  test('find by bodyRegex', async () => {
    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: '',
          bodyIncludes: '',
          bodyRegex: '^.*Kansas.*$',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(true)

    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: '',
          bodyIncludes: '',
          bodyRegex: '^.*not-exist.*$',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(false)
  })

  test('find by author', async () => {
    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'dorothy',
          bodyIncludes: '',
          bodyRegex: '',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(true)

    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'toto',
          bodyIncludes: '',
          bodyRegex: '',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(false)
  })

  test('find by bodyIncludes and author', async () => {
    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'dorothy',
          bodyIncludes: 'Kansas',
          bodyRegex: '',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(true)

    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'dorothy',
          bodyIncludes: 'not-exist',
          bodyRegex: '',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(false)

    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'toto',
          bodyIncludes: 'Kansas',
          bodyRegex: '',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(false)
  })

  test('find by bodyRegex and author', async () => {
    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'dorothy',
          bodyIncludes: '',
          bodyRegex: '^.*Kansas.*$',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(true)

    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'dorothy',
          bodyIncludes: '',
          bodyRegex: '^.*not-exist.*$',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(false)

    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'toto',
          bodyIncludes: '',
          bodyRegex: '^.*Kansas.*$',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(false)
  })

  test('find by bodyIncludes, bodyRegex and author', async () => {
    expect(
      findCommentPredicate(
        {
          token: 'token',
          repository: 'repository',
          issueNumber: 1,
          commentAuthor: 'dorothy',
          bodyIncludes: 'feeling',
          bodyRegex: '^.*Kansas.*$',
          direction: 'direction'
        },
        {
          id: 1,
          body: `Toto, I've a feeling we're not in Kansas anymore.`,
          user: {login: 'dorothy'}
        }
      )
    ).toEqual(true)
  })
})
