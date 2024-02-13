
import './Header.css'

export function Header(){
    return (
        <header>
            <div className="history">
                <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvklEQVRIS7WVgVHDMAxFmw1gg3YDmIAwAXQCwgZ0AugEdAPKBJQJaCeADcgGdIPwfk/2uY4dhzuqu3+mWNaX5G+lmpzYqhPHnxQJuq6rSeIGaJ1aQi3rF3ivqmozlGSWgMAXHHwEt4UqRTSHSKQ9SxIQvMHzGZxZplvWHVCQPRC5cBdUtYBkFTP0CAj+YMHluwY6qKBJw1+J6IysR3JEgPMUp0/LXGUP9tcx2j192O9LzqltB4sJ5FSDFU6LOGUCdYdDWGLPVdKyPesRcFaX+QZaoCx6bRkiUED2v1nUhXvOr48qYPOFfzS57C1AtgLbf2KV8jYQzGMC9V7KyPZ+RAWuC3sIzmMCV94sp2lHEPff3Qn7kvUPSBJoQw7/QeCF4NUAu2uRv6A409LvQK5eSSGBu+QlJeuy/mzBI01espdpqOOxLNZ/ybwOhRI/NNem5EMbIoPASVSv+Nq9o9SokJpkctqOqcAeqVosk8z9udKwG6zE2qKH1ZgCe/eXG9fhRD18WICyckMsHNf6W2NlCdbxiCl9cFS2AgyZSCVtP0FD5zGfTJV/BWowtWyVcQtegSSZ/V4UCQrZF7dPTvALnP7XGWgLzdAAAAAASUVORK5CYII="/></div>
            <div className="search">
                <div className="s-border">
                    <input type="text" placeholder="Search on chanel..." />
                    <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABGUlEQVRIS7WUjQ2CMBSE6QaOoBs4AmzgCI4gk8gIbqAjsIFsICO4Qb0jYAj051qU5CUmvN5X3p3PFH9+zJ/1iyjAWlviEkdUZ4xpUy8UBED8DsHTTLQFpEqBeAEQv0DoinqjbqgzaoeqAWlUyBcAQes5VHE0eL3H+5cqjL4DzvUKYGgEgD48swHLgxDkeDimHkVzCWA1ANYqKGYyb0zR6enwgyOjL4WSMCWmNJfz55c8ZuJSwqIA1yhSEqaYHBq3N2H40kF7K8CbsBVATcVorpyw0D+5HBPk3EHwIZiw6cJOgLqD0OdM2HwaK0BKQpSxhkzO3UEDV0lR7g5yA6bP/dUOipksJSTJg2WzkpBNAOWw0pO17BThqecDaNekGZrNogwAAAAASUVORK5CYII="/>
                    <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABdklEQVRIS9WVjU0CQRBGuQ60A+xAKxAqUDqADqQCtQKxAs8KxAqkA84KpAPp4PxeMmuWu51dEiDGSSZ3ye3Mm7+dqwYnlurE/gcuoG3bS8FH0mvpUHombaSf0rqqqs0+wSUBcj6V8ZM59fzMBVmUID2AnL/J6NYMl3q+Sol2KyWrGykBICtBxjnIDkDO7yxynM1kDKAnVr4PyzCbyS9ARkMZrM1o4jkPNJ0f6R0IcuH1JAaE6GngLJd2BHmxcj3K5iFlEwNC7YvRRwB6hd1SgEkJ8KUDlMlNt+tAZWJ0v6VbAc7/HBDqyfTUe/YgNLqRzVUpA5p0n6tnokTBxh2M7pjSB2SsiFa5LGxMaXA4zxrpSe6iMU1JiDmnpAzFQufmXjCpVcHlobYIu+ZdGqKLVwUThPCNjLn9+QzC12hleIHhrLZAgLqQ0rrmIrGucYJszNmzIm7sHpCxCzn4h1OCHAwgrQ5kZ7seBRBBpt2f0NEA3jT8f8AP5x+oGTDVvesAAAAASUVORK5CYII="/>
                </div>
            </div>
            <div className="user-info">
                <img className="svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACCElEQVRIS7WV4VECQQyFuQ6kA+hAKvCsQKlA6EAqUCqQDsQKhArECqQDrwPp4Hzfzu5Obm+P1R/sTGY1l+TlJdlQjS58qgvHHxUB2ratlcSdhHviE2p0HyX7qqp255IcBFDgazk+Se4LLAGaCwjQ3skCKPhCli+SK5/pQfenhCAnCeDIg2G1EsgmRegBKPijD47tVoIjQbNH9iSCD6cH0gGQ8URGXz5zaLv6Sg8TylX7bwcL7Pv04UFm8qNs7qQAGBFkI6OVCQ4o4PbAimCNtwtMGummPQBlQTPfJTjg6Moi/bMusierpcSy2coOnTuy/faJLKXfoosM9PFV/y8kMXvvFLLHKZSMBqM/STc2ACGZnfTzFAAHHGPtg2N6G7ZHBZoZgFCFCGwZBHrToZn2jGrdlJJSrWVL1qFE6H4sMwvABwwGAfzjYxCwY+YBiCPsp404I+ldbAsQShQblClNnLI0uGGHTZykXJM7tC2IMmz9/+Pc4zOPNNvkOKZ2jocanWFH2egNPYqDkj60UKbOqJomOgahvgk7mh3ey21gmFsVTBMHo0OuRCmAH1veEYfso19p2WWZGEbhVS+k642tY5urcbJRWRF7CVmFJWbXNX8zqmsJq6OzeUs/ONAmwLnjdpQCxw1qjf/ykwn9G0ktmfhsybKRvEkYyU7W/wIoZF/8XGRQjFAw+AXiVv8ZlQKrqAAAAABJRU5ErkJggg=="/>
                <div className="s-avatar">
                    <img src="./public/avatar_pics/avatar11.1060b63041fdffa5f8ef.png" alt="Profile Pic" />
                </div>
            </div>
            
        </header>
    )
}